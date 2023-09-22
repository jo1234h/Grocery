import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiServicesService } from '../Shared/api-services.service';
import { AuthenticatedResponse } from '../models/authenticated-response';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
{

  username:string='user';
  constructor(private jwtHelper: JwtHelperService,private serv:ApiServicesService) { }

  ngOnInit(): void {
    
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
  }
  
  

 

}

 



