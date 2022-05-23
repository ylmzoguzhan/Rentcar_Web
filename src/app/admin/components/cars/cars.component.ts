import { Component, OnInit } from '@angular/core';
import { carImageModel } from 'src/app/models/carImageModel';
import { CarModel } from 'src/app/models/carModel';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars:CarModel[]
  carImages:carImageModel[]
  constructor(private carService:CarService, private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.getCars();
    this.getByCarId();
  }

  getCars(){
    this.carService.getAll().subscribe(response=>{
      this.cars = response.data
    })
  }

  getByCarId() {
    this.carImageService.getByCarId(1).subscribe(response => {
      console.log(response.data)
      this.carImages = response.data
    })
  }

  getImage(carImage: carImageModel) {
    if(carImage)
    return "https://localhost:44312/" + carImage.imagePath
    else
    return ""
  }
}
