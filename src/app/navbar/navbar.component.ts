import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiServicesService } from '../Shared/api-services.service';
import { AuthenticatedResponse } from '../models/authenticated-response';
import { Router } from '@angular/router';
import { OrderSummary } from '../models/order-summary';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
{

  totalAmount:number=0;
  constructor(private jwtHelper: JwtHelperService,private serv:ApiServicesService,private router:Router) { }

  ngOnInit(): void {
  }
  getUserName(){
    return (localStorage.getItem("UserName")!=null)?localStorage.getItem("UserName"):'';
  }

  getEmailId(){
    return (localStorage.getItem("EmailId")!=null)?'Email Addres :'+localStorage.getItem("EmailId"):'';
  }
  getPhone(){
    return (localStorage.getItem("Phone")!=null)?'Phone Number :'+localStorage.getItem("Phone"):'';
  }

  getOrderList(){
    return this.serv.orderedProducts;
  }

  calculateTotal(){
    this.totalAmount=45;
    this.getOrderList().forEach(element => {
      this.totalAmount+=element.pricePerProduct;
    });
    return this.totalAmount;
  }
  

  checkUserActive():boolean{
    if(this.serv.isUserAuthenticated()){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem('SecurityToken');
    localStorage.removeItem('UserName');
    localStorage.removeItem('EmailId');
    localStorage.removeItem('Phone');
    this.router.navigate(['/']);
  }
  
  isActive(route:string){
    return this.router.url.includes(route);
  }

  removeItem(id:any){
    this.serv.orderedProducts=this.serv.orderedProducts.filter(item=>item.productId!==id);
  }
 

}

 



