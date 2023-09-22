import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Product } from '../models/product';
import { ApiServicesService } from '../Shared/api-services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(public serv:ApiServicesService){}
  pro:Product[];
ngOnInit(): void {
  this.serv.GetProductCategories();
  this.serv.GetProductByCategory(102);
  this.serv.GetProductByNamePrice('Product 2',1000);
}  
 // can user serv.productList in html to get the values of categories from database
 // need to pass the value into the getproductbycategory from the url
 // this comment need to be removed before submission

}

 


