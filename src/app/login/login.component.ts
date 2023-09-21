import { Component } from '@angular/core';
import { ApiServicesService } from '../Shared/api-services.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup;
  constructor (private formBuilder:FormBuilder,serv :ApiServicesService){

  }
  

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      
      
    });
    }
    onSubmit(){
     if(this.loginForm.valid){
      console.log(this.loginForm.get('username')?.value);
      this.loginForm.reset();
      alert("Login Complete")
     }
     else{
      this.loginForm.reset();
      alert("Incorrect username or password")
     } 
    }


}
