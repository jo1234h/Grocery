import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticatedResponse } from '../models/authenticated-response';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http:HttpClient,private jwt:JwtHelperService) { }
  private readonly aipURL='http://localhost:5092/api/auth/login';

  //for login
  authenticateLogin(cred:Credential){
   this.http.post<AuthenticatedResponse>(this.aipURL, cred, {
          headers: new HttpHeaders({ "Content-Type": "application/json"})
        }).subscribe({
          next: (response: AuthenticatedResponse) => {
            console.log("inside login")
            const token = response.Token;
            console.log(response.Token)
            console.log(token);
            localStorage.setItem("SecurityToken", token); 
            alert("Login Successful");
          },
          error: (error: HttpErrorResponse) => {
            console.log(error);
            if(error.status==401){
              alert("Invalid username or password");
            }
            else{
              alert(error);
            }
          }
        })
  }

  //for checking the token
  isUserAuthenticated= (): boolean => {
    const token = localStorage.getItem("SecurityToken");
    if (token && !this.jwt.isTokenExpired(token)){
      return true;
    }
    return false;
  }

}
