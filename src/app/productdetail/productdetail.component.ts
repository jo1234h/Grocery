import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../Shared/api-services.service';
import { Router } from '@angular/router';
import { Product } from '../models/product';
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
  result:any={};
  
  ngOnInit(): void 
  {
    // Get the category ID from the route parameters
    this.route.paramMap.subscribe(params => 
    {
      const productId = +params.get('Id'); // "+" is used to convert the parameter to a number
      // Now, you can use the productid to fetch products based on it
      this.serv.GetProductById(productId);
    });
  }

  increaseItem(max:number)
  {
    if(this.qty!==max)
    {
      this.qty++;
    }
  }
  decreaseItem()
  {
    if(this.qty!==1)
    {
      this.qty--;
    }
  }

  addToCart(id:number,name:string,price:number)
  {
    this.result=this.serv.orderedProducts.find(ind=>ind.productId===id);
    if(this.result==null)
    {
      this.item.productId=id;
      this.item.productName=name;
      this.item.quantity=this.qty;
      this.item.pricePerProduct=price*this.qty;
      this.serv.orderedProducts.push(this.item);
    }
    else
    {
      this.result.quantity+=this.qty;
      this.result.pricePerProduct+=(this.qty*price);
    }
    alert('Product Added to the Cart')
  }

}
