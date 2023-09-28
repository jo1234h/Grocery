import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiServicesService } from '../Shared/api-services.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate 
{
  constructor(private router: Router, private jwtHelper: JwtHelperService, private serv: ApiServicesService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
  {
    const token = localStorage.getItem("SecurityToken");
    if (this.serv.isAdmin() === "Admin") 
    {
      return false;
    }
    if (token && !this.jwtHelper.isTokenExpired(token)) 
    {
      //this.jwtHelper.decodeToken(token);
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
}