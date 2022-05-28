import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/models/registerModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerModel:RegisterModel={
    firstName:"",
    lastName:"",
    password:"",
    tc:"",
    telNo:""
  }
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  register(){
    this.authService.register(this.registerModel).subscribe(response=>{
      if(response.success){
        window.location.href="http://localhost:4200/login";
      }
    })
  }
}
