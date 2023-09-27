import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServicesService } from 'src/app/Shared/api-services.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit
{
  constructor(public serv:ApiServicesService){}

  ngOnInit():void
  {
      this.serv.GetAllProducts();
      this.resetForm();
  }

  fillForm(selectedPP)
  {
      this.serv.singleData=Object.assign({},selectedPP);
  }

  delProduct(id)
    {
      if(confirm("Are you sure to delete this product?"))
      {
        this.serv.deleteProduct(id).subscribe
        (
          res=>
          {
            this.serv.GetAllProducts();
            alert("Product Deleted!");
          },
          err=>
          {
            alert("Error "+err);
          }
        );
      }
    }  

    resetForm(form?: NgForm)
    {
     if(form!=null)
     { 
       form.form.reset();
     }
       this.serv.singleData={Id:0, ProductName:'',Description:'',UnitPrice:null, UnitsInStock:null,Discontinued:false,CategoryId:null,CreatedDate:this.serv.singleData.CreatedDate,ModifiedDate:null}
     
  }

  onSubmit (form: NgForm)
  {
    if(this.serv.singleData.Id==0)
    {
      this.insertRecord(form); 
    }
    else
    {
      this.updateRecord (form);
    }
  }

  insertRecord(form:NgForm)
  {
    this.serv.AddProducts(this.serv.singleData).subscribe(
      res =>
      {
        this.resetForm(form);
        this.serv.GetAllProducts();
        alert('Product Insertion Success!!!');
      },
      err=>
      { 
        alert('Error!!!'+err);
      }
    )
  }
  
  updateRecord(form:NgForm)
  {
    this.serv.EditProducts(this.serv.singleData).subscribe(
      res=>
      {
       this.resetForm(form);
       this.serv.GetAllProducts();
       alert('Product Updated!');
      },
      err=>
      {
        alert('Error!!!'+err);
      }
    )
  }   
}
