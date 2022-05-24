import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/models/carModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token:boolean;
  cars:CarModel[]
  constructor(private carService:CarService) { }

  ngOnInit(): void {
  let tokens = localStorage.getItem("token")
  if(tokens!=null){
    this.token = true
  }else{
    this.token = false
  }
  this.getCars()
  }

  getCars(){
    this.carService.getAll().subscribe(response=>{
      this.cars = response.data
    })
  }

  selectCar(car:CarModel){
   localStorage.setItem("detailuicar",car.id.toString()) 
  }
}
