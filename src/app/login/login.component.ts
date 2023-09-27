import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../Shared/api-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from '../home/home.component';
import { AuthenticatedResponse } from '../models/authenticated-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  loginForm!:FormGroup;  

  //for login

  constructor(
    private router: Router, 
    private formBuilder:FormBuilder,
    private serv :ApiServicesService
    ) { }

  //

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      emailId:['',[Validators.required,Validators.email]],
      password:['',Validators.required], 
    });
    }
    
    login( form: FormGroup){
      if (form.valid) {
        this.serv.authenticateLogin(form.value).subscribe({
          next: (response: AuthenticatedResponse) => {
            localStorage.setItem("SecurityToken", response.Token);
            localStorage.setItem("UserName", response.UserName);
            localStorage.setItem("EmailId",response.EmailId);
            localStorage.setItem("Phone",response.Phone);
            this.router.navigate(['']);
            alert("Login Successful");
          },
          error: (error: HttpErrorResponse) => {
            console.log(error);
            if (error.status == 401) {
              alert("Invalid username or password");
            }
            else {
              alert(error);
            }
          }
        });
      }
      else{
        alert("Invalid data");
      }
      form.reset();
    }
}



