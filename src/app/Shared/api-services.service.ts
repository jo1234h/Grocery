import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticatedResponse } from '../models/authenticated-response';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  private readonly apiURL='http://localhost:5092/api/auth';
  token : string;  
  header : any;  

  constructor(private http:HttpClient,private jwt:JwtHelperService) { 
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }
  
  //for login
  authenticateLogin(cred:Credential){
   this.http.post<AuthenticatedResponse>(this.apiURL+'/login/', cred, {
          headers: new HttpHeaders({ "Content-Type": "application/json"})
        }).subscribe({
          next: (response: AuthenticatedResponse) => {
            const token = response.Token;
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
  CreateUser(register:Register)  
  {  
    console.log("Success!")
    const httpOptions = 
    { 
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
    };  
    return this.http.post<Register>(this.apiURL + '/register/', register, httpOptions)  
  }  

}
