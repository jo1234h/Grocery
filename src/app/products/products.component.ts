import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Product } from '../models/product';
import { ApiServicesService } from '../Shared/api-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private router: Router,public serv:ApiServicesService,private route:ActivatedRoute){}
  pro:Product[];
  Id:number;
  

  ngOnInit(): void 
  {
    console.log('active')
    this.serv.GetProductCategories();  
  }  

  selectedCategoryId: number;


onProductClick(categoryId: number) {
  this.selectedCategoryId = categoryId;

  const productsByCategory = this.serv.GetProductByCategory(categoryId);
}


isCategorySelected(categoryId: number): boolean {
  return this.selectedCategoryId === categoryId;
}


}


 


