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
  constructor(public serv:ApiServicesService){}
  public cat:Category;
  ngOnInit(): void {
    this.resetForm();
    
  }
  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.cat={Id:0,CategoryName:''}
    }
  }
  public onSubmit(form:NgForm){
    if(this.cat.Id==0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }
  insertRecord(form:NgForm){
    this.serv.AddCategory(form.value).subscribe(res=>{this.resetForm(form);
    this.cat=res.value;
    })
  }
  updateRecord(form:NgForm){
    this.serv.updateCategory(form.value).subscribe(res=>
      {
        this.resetForm();
        this.cat=res.value;
        alert('Record Updated!!!');
      },
      err=>{
        alert('Error!!'+err);
      }
      )
  }
  
}
