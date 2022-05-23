import { Component, Input, OnInit } from '@angular/core';
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
  selectedCarId:number
  carDetail:CarModel
  carImages:carImageModel[]
  constructor(private carService:CarService, private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.selectedCarId = Number(localStorage.getItem("detailadmincar"))
    this.getCarDetails()
    this.getCarImages()
  }

  getCarDetails(){
    this.carService.getById(this.selectedCarId).subscribe(response=>{
      this.carDetail = response.data
    })
  }
  getCarImages(){
    this.carImageService.getByCarId(this.selectedCarId).subscribe(response=>{
      this.carImages = response.data
    })
  }

  newPath(imageModel:carImageModel){
    return "https://localhost:44312/" + imageModel.imagePath
  }

}
