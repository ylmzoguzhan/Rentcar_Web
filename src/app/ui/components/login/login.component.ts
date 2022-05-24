
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthService } from 'src/app/services/auth.service';

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
      console.log(response)
      localStorage.setItem("token",response.data.token)
      window.location.reload();
    })
  }
}
