import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/Shared/api-services.service';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.css']
})
export class CategoryDisplayComponent implements OnInit {
  constructor(public serv:ApiServicesService){ }
  ngOnInit(): void {
    this.serv.categoryList;
    
  }
  fillForm(selectedcat){
    this.serv.categoryList=Object.assign({},selectedcat);
  }
  delcategory(id){
    this.serv.deleteCategory(id).subscribe(res=>{this.serv.categoryList;
      alert("Category Deleted");},
      err=>{alert("Error"+err);
    }
      );
  }


}
