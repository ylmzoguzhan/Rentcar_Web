import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userModel:UserModel={
    id:0,
    firstName:"",
    lastName:"",
    passwordHash:"",
    passwordSalt:"",
    tc:"",
    telNo:""

  }
  tc:string=""
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  if(localStorage.getItem("tc")!=null){
    this.tc = localStorage.getItem("tc") || ""
  }
  this.getUser()
  }

  getUser(){
    this.userService.getByTc(this.tc).subscribe(response=>{
      this.userModel = response.data
    })
  }
}
