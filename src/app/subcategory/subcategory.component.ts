import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiServicesService } from '../Shared/api-services.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit{
  constructor(private router: Router,private route: ActivatedRoute, public serv: ApiServicesService) {}
  Id:number;

  
ngOnInit(): void {
  
 // Get the category ID from the route parameters
 this.route.paramMap.subscribe(params => {
  const categoryId = +params.get('categoryId'); // "+" is used to convert the parameter to a number
  console.log(categoryId);
  // Now, you can use the categoryId to fetch products based on it
  this.serv.GetProductByCategory(categoryId);
});
  
}  
onProductClick(productId:number){
  
  // Navigate to the ProductdetailComponent with the productId parameter
  this.router.navigate(['productdetail',{Id:productId}]);
  const productsByname = this.serv.GetProductById(productId);
}
}