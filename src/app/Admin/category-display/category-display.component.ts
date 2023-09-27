import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiServicesService } from 'src/app/Shared/api-services.service';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.css']
})
export class CategoryDisplayComponent implements OnInit {
  constructor(public serv:ApiServicesService,private toastr:ToastrService){ }
  ngOnInit(): void {
    this.serv.GetAllCategory();
    
  }
  fillForm(selectedcat){
    this.serv.Cdata=Object.assign({},selectedcat);
  }
  delcategory(id)
    {
      if(confirm("Are you sure to delete this category?"))
      {
        this.serv.deleteCategory(id).subscribe
        (
          res=>
          {
            this.serv.GetAllCategory();
            this.showDeleteSuccess();
          },
          err=>
          {
            this.showDeleteError();
          }
        );
      }
    }  
    showDeleteSuccess(){
      this.toastr.success("Product updated");
    }
    showDeleteError(){
      this.toastr.error("Updation failed");
    }

}
