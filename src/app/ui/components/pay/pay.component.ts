import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/models/carModel';
import { RentModel } from 'src/app/models/rentModel';
import { UserModel } from 'src/app/models/userModel';
import { CarService } from 'src/app/services/car.service';
import { RentService } from 'src/app/services/rent.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  selectCar:CarModel
  user:UserModel
  date:Date = new Date()
  rentModel:RentModel={
    carId:1000,
    price:400000,
    rentDate:this.date,
    returnDate:this.date,
    userId:1000
  }
 
  constructor(private carService:CarService, private rentService:RentService, private userService:UserService) { }

  ngOnInit(): void {
    let carId = Number(localStorage.getItem("detailuicar"))
    this.carService.getById(carId).subscribe(response=>{
      this.selectCar = response.data
    })
    let tc = localStorage.getItem("tc")
    if(tc!=null){
      this.userService.getByTc(tc).subscribe(response=>{
        this.user = response.data
      })
    }
  }
  tikla(){
    console.log("çalıştı")
  }
  pay(){
    if(this.selectCar!=null){
    this.rentModel.carId = this.selectCar.id
    this.rentModel.userId = this.user.id
    this.rentModel.price = this.selectCar.dailyPrice
  }
    this.rentService.add(this.rentModel).subscribe(response=>{
      this.selectCar.rent = true
      this.carService.updateRent(this.selectCar).subscribe(response=>{
        console.log(response)
      })
    })
    alert("Kiralandı")
  }

}
