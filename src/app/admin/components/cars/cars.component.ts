import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/models/carModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars:CarModel[]
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getAll().subscribe(response=>{
      this.cars = response.data
    })
  }

}
