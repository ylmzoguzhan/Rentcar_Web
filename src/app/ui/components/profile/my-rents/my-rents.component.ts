import { Component, OnInit } from '@angular/core';
import { RentDetailsModel } from 'src/app/models/rentDetailsModel';
import { RentModel } from 'src/app/models/rentModel';
import { UserModel } from 'src/app/models/userModel';
import { RentService } from 'src/app/services/rent.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-rents',
  templateUrl: './my-rents.component.html',
  styleUrls: ['./my-rents.component.css']
})
export class MyRentsComponent implements OnInit {
  user:UserModel
  myRents:RentDetailsModel[]
  tc:string
  constructor(private userService:UserService, private rentService:RentService) { }

  ngOnInit(): void {
    let tc =localStorage.getItem("tc")
    if(tc!=null){
      this.tc = tc
    }
    console.log(this.tc)
   this.getUser()

  }

  getUser(){
    this.userService.getByTc(this.tc).subscribe(response=>{
      this.getMyRents(response.data.id)
    })
  }
  getMyRents(id:number){
    
    this.rentService.getAllDetailsByUserId(id).subscribe(response=>{
      this.myRents = response.data
    })
  }

}
