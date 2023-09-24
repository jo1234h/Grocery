import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../Shared/api-services.service';
import { Category } from '../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public serv:ApiServicesService,private router:Router){}
ngOnInit(): void {
  this.serv.GetProductCategories();
}  

//this submit button can be applied to each category compnented listed in the home page
onSubmit(Id:number){
  console.log(Id);
  this.router.navigate(['products/',{categoryId:Id}]);
}

}
