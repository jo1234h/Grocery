import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServicesService } from 'src/app/Shared/api-services.service';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit{
  constructor(public serv:ApiServicesService) {
    
  }
  
  //public cat:Category;
  ngOnInit(): void {
    this.serv.GetAllCategory();
    this.resetForm();
    
  }
  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
      this.serv.Cdata={Id:0,CategoryName:''}
    
  }
   onSubmit(form:NgForm){
    if(this.serv.Cdata.Id==0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }
  insertRecord(form:NgForm){
    this.serv.AddCategory(this.serv.Cdata).subscribe(res=>
      {this.resetForm(form);
    this.serv.GetAllCategory();
    alert('Category Added!!!')
    },
    err=>{
      alert('Error'+err);
    }
    )
  }
  updateRecord(form:NgForm){
    this.serv.EditCategory(this.serv.Cdata).subscribe(res=>
      {
        this.resetForm();
        this.serv.GetAllCategory();
       // this.cat=res.value;
        alert('Record Updated!!!');
      },
      err=>{
        alert('Error!!'+err);
      }
      )
  }
  
}
