import { Component, OnInit } from '@angular/core';
import { CarDetailsModel } from 'src/app/models/carDetailsModel';
import { CarImageAddModel } from 'src/app/models/carImageAddModel';
import { carImageModel } from 'src/app/models/carImageModel';
import { UploadFile } from 'src/app/models/file';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-caredit',
  templateUrl: './caredit.component.html',
  styleUrls: ['./caredit.component.css']
})
export class CareditComponent implements OnInit {
  currentFile:File | null;
  carAddImage:CarImageAddModel={
    image :new UploadFile().file,
    carId:1
  }
  carDetail:CarDetailsModel
  carImages:carImageModel[]
  constructor(private carImageService:CarImageService,private carService:CarService) { }

  ngOnInit(): void {
    this.carAddImage.carId = Number(localStorage.getItem("detailadmincaredit"));
    this.getCarDetails();
  }
  deneme(event:any){
    if (event.target.files.length > 0) {
      this.currentFile =event.target.files[0];
      console.log(this.currentFile)
    }
  }
  upload(){
    if(this.currentFile!=null)
    this.carAddImage.image = this.currentFile
    this.carImageService.uploadImage(this.carAddImage.image,this.carAddImage.carId).subscribe(response=>{
      alert("Resim eklendi")
      window.location.reload()
    })
  }
  getCarDetails(){
    this.carService.getCarDetailsByCarId(this.carAddImage.carId).subscribe(response=>{
      this.carDetail = response.data
      this.getImages()
    })
  }
  getImages(){
    this.carImageService.getByCarId(this.carAddImage.carId).subscribe(response=>{
      this.carImages = response.data
    })
  }

  newPath(imageModel:carImageModel){
    return "https://localhost:44312/" + imageModel.imagePath
  }

}
