import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiServicesService } from 'src/app/Shared/api-services.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit
{
  constructor(public serv:ApiServicesService,private toastr:ToastrService){}

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
            this.showDeleteSuccess();
          },
          err=>
          {
            this.showDeleteError();
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
        this.showInsertSuccess();
      },
      err=>
      { 
        this.showInsertError();
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
       this.showUpdateSuccess();
      },
      err=>
      {
        this.showUpdateError();
      }
    )
  }   
  showInsertSuccess(){
    this.toastr.success("Product added");
  }
  showInsertError(){
    this.toastr.error("Insertion failed");
  }
  showUpdateSuccess(){
    this.toastr.success("Product updated");
  }
  showUpdateError(){
    this.toastr.error("Updation failed");
  }
  showDeleteSuccess(){
    this.toastr.success("Product updated");
  }
  showDeleteError(){
    this.toastr.error("Updation failed");
  }
}
