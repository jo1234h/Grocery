import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiServicesService } from '../Shared/api-services.service';
import { AuthenticatedResponse } from '../models/authenticated-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
{

  constructor(private jwtHelper: JwtHelperService,private serv:ApiServicesService,private router:Router) { }

  ngOnInit(): void {
  }
  getUserName(){
    return (localStorage.getItem("UserName")!=null)?'Hello,'+localStorage.getItem("UserName"):'';
  }

  getEmailId(){
    return (localStorage.getItem("EmailId")!=null)?'Email Addres :'+localStorage.getItem("EmailId"):'';
  }
  getPhone(){
    return (localStorage.getItem("Phone")!=null)?'Phone Number :'+localStorage.getItem("Phone"):'';
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
  
  

 

}

 



