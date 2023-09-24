import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../Shared/api-services.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
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
  
  ngOnInit(): void {
    // Get the category ID from the route parameters
 this.route.paramMap.subscribe(params => {
  const productId = +params.get('Id'); // "+" is used to convert the parameter to a number
  
  // Now, you can use the productid to fetch products based on it
  this.serv.GetProductById(productId);
});
    
    
  }

}
