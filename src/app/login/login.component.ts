import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../Shared/api-services.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../models/login-model';
import { Router } from '@angular/router';
import { AuthenticatedResponse } from '../models/authenticated-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  loginForm!:FormGroup;
  submittedData:any[]=[];
  

  //for login
  invalidLogin?: boolean;
  credentials: LoginModel = {username:'', password:''};

  constructor(
    private router: Router, 
    private http: HttpClient,
    private formBuilder:FormBuilder,
    serv :ApiServicesService
    ) { }

  //

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      
      
    });
    }
    // onSubmit(){
    //  if(this.loginForm.valid){
    //   const formData=this.loginForm.value;
    //   this.submittedData.push(formData);
    //   this.loginForm.reset();
    //   // console.log(this.loginForm.get('username')?.value);
    //   // this.loginForm.reset();
    //   alert("Login Complete")
    //  }
    //  else{
    //   this.loginForm.reset();
    //   alert("Incorrect username or password")
    //  } 
    // }

    //for loginin;
    login = ( form: FormGroup) => {
      if (form.valid) {
        this.http.post<AuthenticatedResponse>("http://localhost:5092/api/auth/login", this.credentials, {
          headers: new HttpHeaders({ "Content-Type": "application/json"})
        })
        .subscribe({
          next: (response: AuthenticatedResponse) => {
            const token = response.token;
            localStorage.setItem("jwt", token); 
            this.invalidLogin = false; 
            this.router.navigate(["/"]);
          },
          error: (err: HttpErrorResponse) => {
            this.invalidLogin = true,
            alert("Invalid username or Password")
          }
        })
      }
    }


}
