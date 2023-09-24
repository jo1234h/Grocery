import { Component,OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Product } from '../models/product';
import { ApiServicesService } from '../Shared/api-services.service';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  constructor(private router: Router,public serv:ApiServicesService){}
  pro:Product[];
   
  ngOnInit(): void {
  this.serv.GetProductCategories();  
}  
navigateToPage() {
  this.router.navigate(['/products']);

}
}
