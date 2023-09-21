import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiServicesService } from '../Shared/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(private router:Router, private serv:ApiServicesService){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.serv.isUserAuthenticated()){
      console.log("inside authguard")
      return true;
    }

    this.router.navigate(["login"]);
    return false;
  }
}
