import { Component, OnInit } from '@angular/core';
import { carImageModel } from 'src/app/models/carImageModel';
import { CarModel } from 'src/app/models/carModel';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {
  selectCar:CarModel
  images:carImageModel[]
  lat:number
  lng:number
  constructor(private carService:CarService,private imageServer:CarImageService) { }

  ngOnInit(): void {
    let carId = Number(localStorage.getItem("detailuicar"))
    this.carService.getById(carId).subscribe(response=>{
      this.selectCar = response.data
      this.lat = this.selectCar.lat
      this.lng = this.selectCar.lng
      this.getImages(response.data.id)
    })
  }
  
  getImages(id:number){
    this.imageServer.getByCarId(id).subscribe(response=>{
      this.images = response.data
    })
  }
  newPath(imageModel:carImageModel){
    return "https://localhost:44312/" + imageModel.imagePath
  }
  rent(){
    
  }
}
