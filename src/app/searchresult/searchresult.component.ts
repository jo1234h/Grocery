import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServicesService } from '../Shared/api-services.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})

export class SearchresultComponent implements OnInit
{
  constructor(private router: Router,private route: ActivatedRoute, public serv: ApiServicesService) {}
  Id:number;

  ngOnInit(): void 
  {
    // Get the category ID from the route parameters
    this.route.paramMap.subscribe(params => 
    {
      const productName = params.get('productName'); // "+" is used to convert the parameter to a number
      const price=+params.get('price');
      // Now, you can use the categoryId to fetch products based on it
      this.serv.GetProductByNamePrice(productName, price);
    });
    
  }
  
  onProductClick(productId:number)
  {  
    // Navigate to the ProductdetailComponent with the productId parameter
    this.router.navigate(['productdetail',{Id:productId}]);
    const productsByname = this.serv.GetProductById(productId);
  }
}
