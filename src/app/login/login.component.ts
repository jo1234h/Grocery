import { Component,OnInit } from '@angular/core';
import { ApiServicesService } from '../Shared/api-services.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  submittedData:any[]=[];
  constructor (private formBuilder:FormBuilder,serv :ApiServicesService){

  }
  

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required,Validators.email],
      password:['',Validators.required],
      
      
    });
    }
    onSubmit(){
     if(this.loginForm.valid){
      const formData=this.loginForm.value;
      this.submittedData.push(formData);
      this.loginForm.reset();
      // console.log(this.loginForm.get('username')?.value);
      // this.loginForm.reset();
      alert("Login Complete")
     }
     else{
      this.loginForm.reset();
      alert("Incorrect username or password")
     } 
    }


}
