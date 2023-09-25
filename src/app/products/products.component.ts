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



onProductClick(categoryId: number) {
  const productsByCategory = this.serv.GetProductByCategory(categoryId);
}




 // can user serv.productList in html to get the values of categories from database
 // need to pass the value into the getproductbycategory from the url
 // this comment need to be removed before submission

}


 


