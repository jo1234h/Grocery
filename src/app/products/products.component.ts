import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Product } from '../models/product';
import { ApiServicesService } from '../Shared/api-services.service';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private router: Router,public serv:ApiServicesService){}
  pro:Product[];
  cat:Category;
  a:any[];
  categoryClicked: { [key: number]: boolean } = {};



ngOnInit(): void {
   const productsByCategory = this.serv.GetProductByCategory(102)
  
}  
// onProductClick(Id: number){
  
//   // Navigate to the ProductdetailComponent with the productId parameter
//   this.router.navigate(['subcategory',Id]);
//  this.a = this.pro.filter(
//     (product) => product.CategoryId === Id
    
//   );
// }
onProductClick(categoryId: number) {
     const productsByCategory = this.serv.GetProductByCategory(this.cat.Id)

  // Handle the click event here, e.g., navigate to a different page or perform an action
  console.log(`Category with ID ${categoryId} clicked.`);
  this.categoryClicked[categoryId] = !this.categoryClicked[categoryId];
 
}




 // can user serv.productList in html to get the values of categories from database
 // need to pass the value into the getproductbycategory from the url
 // this comment need to be removed before submission

}


 


