import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../Shared/api-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  loginForm!:FormGroup;  

  //for login
  invalidLogin?: Observable<boolean>;

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
    
    login = ( form: FormGroup) => {
      if (form.valid) {
        this.serv.authenticateLogin(form.value)
        if(this.serv.isUserAuthenticated()){
          this.router.navigate(['']);
        }
      }
      else{
        alert("Invalid data");
      }
      form.reset();
    }


}





/*

import { Component, OnInit } from '@angular/core';    
import { Router } from '@angular/router';    
import { LoginService } from '../login.service';    
 import { FormsModule } from '@angular/forms';    
    
@Component({    
  selector: 'app-login',    
  templateUrl: './login.component.html',    
  styleUrls: ['./login.component.css']    
})    
export class LoginComponent {    
    
  model : any={};    
    
  errorMessage:string;    
  constructor(private router:Router,private LoginService:LoginService) { }    
    
    
  ngOnInit() {    
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
  }    
  login(){    
    debugger;    
    this.LoginService.Login(this.model).subscribe(    
      data => {    
        debugger;    
        if(data.Status=="Success")    
        {       
          this.router.navigate(['/Dashboard']);    
          debugger;    
        }    
        else{    
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };    
 }  

 */