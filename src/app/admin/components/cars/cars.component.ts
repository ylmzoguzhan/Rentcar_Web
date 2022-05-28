import { Component, Input, OnInit } from '@angular/core';
import { CarDetailsModel } from 'src/app/models/carDetailsModel';
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
  carDetails:CarDetailsModel[]
  carImages:carImageModel[]
  
  constructor(private carService:CarService, private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.getCars();
    this.getAll();
  }
  	
  
  getCars(){
    this.carService.getCarDetails().subscribe(response=>{
      console.log(response.data)
      this.carDetails = response.data
    })
  }

  getByCarId(id:number) {
    this.carImageService.getByCarId(id).subscribe(response => {
      this.carImages = response.data
    })
  }

  getAll(){
    this.carImageService.getAll().subscribe(response=>{
      console.log(response.data)
      this.carImages = response.data
    })
  }

  carIdSetLocal(id:number){
    localStorage.setItem("detailadmincar",id.toString())
  }

}
