import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../Shared/api-services.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Product } from '../models/product';
import { OrderSummary } from '../models/order-summary';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit{
  constructor(private router: Router,private route: ActivatedRoute,public serv:ApiServicesService){}
  pro:Product[]=[];
  item:any={};
  qty:number=1;
  
  ngOnInit(): void {
    // Get the category ID from the route parameters
 this.route.paramMap.subscribe(params => {
  const productId = +params.get('Id'); // "+" is used to convert the parameter to a number
  
  // Now, you can use the productid to fetch products based on it
  this.serv.GetProductById(productId);
  //this.serv.GetProductById(1);
});
    
    
  }

  addToCart(id:number,name:string,price:number){

    this.item.productId=id;
    this.item.productName=name;
    this.item.quantity=this.qty;
    this.item.pricePerProduct=price*this.qty;
    this.serv.orderedProducts.push(this.item);
  }

}
