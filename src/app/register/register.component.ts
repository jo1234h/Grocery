import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Register } from '../models/register.model';
import { Route, Router } from '@angular/router';
import { ApiServicesService } from '../Shared/api-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {    
  data = false;    
  UserForm: any;    
  message:string;    
  constructor(private formbulider: FormBuilder,private loginService:ApiServicesService,private router:Router) { }    
    
  ngOnInit() {    
    this.UserForm = this.formbulider.group({    
      FirstName: ['', [Validators.required]],    
      LastName: ['', [Validators.required]],  
      Gender:['',[Validators.required]],
      DateofBirth:['',Validators.required],
      EmailId: ['', [Validators.required,Validators.email]],    
      MobileNo: ['', [Validators.required]],   
      Password: ['', [Validators.required]], 
    });    
  }    
   onFormSubmit()    
  {    
    const user = this.UserForm.value;    
    this.CreateUser(user);    
  }    
  CreateUser(register:Register)    
  {    
    this.loginService.CreateUser(register).subscribe(    
     ()=>    
     {    
       this.data = true;    
       this.message = 'Data saved Successfully';    
       this.UserForm.reset();    
       this.router.navigate(['login'])
     });  
  }    
}   

