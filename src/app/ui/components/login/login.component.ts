
import { Component, OnInit } from '@angular/core';
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
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    
  }

  login(){
    this.authService.login(this.loginModel).subscribe(response=>{
      console.log(response.data)
    })
  }
}
