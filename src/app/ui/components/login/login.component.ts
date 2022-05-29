
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gercekTokenModel } from 'src/app/models/gercekTokenModel';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel:LoginModel={
    tc:"",
    password:""
  }
  constructor(private authService:AuthService, private route:Router) { }

  ngOnInit(): void {
    
  }

  login(){
    this.authService.login(this.loginModel).subscribe(response=>{
      localStorage.setItem("tc",this.loginModel.tc)
      localStorage.setItem("token",response.data.token)
        //window.location.href="http://localhost:4200/";
        let test = response.data.token
        if(test){
          let obj:gercekTokenModel = jwt_decode(test);
          if(obj.roles){
            if(obj.roles.toString()=="Admin")
           window.location.href="http://localhost:4200/admin/cars";
          }else{
            window.location.href="http://localhost:4200/";
          }
        }
       
      }
    
    
    
    
    
    
    
    
      )}
  }


