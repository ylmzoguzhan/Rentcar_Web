import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  user:UserModel
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    let tc = localStorage.getItem("tc") || ""
    this.userService.getByTc(tc).subscribe(response=>{
      this.user = response.data
    })
  }

}
