import { Component, Input, OnInit } from '@angular/core';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { ConnectableObservable } from 'rxjs';
import { CarImageAddModel } from 'src/app/models/carImageAddModel';
import { carImageModel } from 'src/app/models/carImageModel';
import { CarModel } from 'src/app/models/carModel';
import { CoordModel } from 'src/app/models/coordModel';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CoordService } from 'src/app/services/coord.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {
  selectedCarId:number
  carDetail:CarModel
  carImages:carImageModel[]
  lat:number
  lng:number 
  public files: NgxFileDropEntry[] = [];
  addImage:CarImageAddModel[]
  coords:CoordModel[]
  show=false
  isRent =false
  constructor(private carService:CarService, private carImageService:CarImageService, private coordService:CoordService) { }

  ngOnInit(): void {
    this.selectedCarId = Number(localStorage.getItem("detailadmincar"))
    this.getCarDetails()
    this.getCarImages()
      
  }
  getCoords(id:number){
    this.coordService.getAllByCarId(id).subscribe(response=>{
      console.log(response)
      this.coords = response.data
    })
  }
  getCoords2(){  
    console.log(this.isRent)
    if(this.isRent){

      let i=0
      let timer =  setInterval(()=>{
          console.log(i)
          this.lat = this.coords[i].lat
          this.lng = this.coords[i].lng
          i++
          if(i >=this.coords.length){
            clearInterval(timer)  
          }
        },1000)
      }
  }
  getCarDetails(){
    this.carService.getById(this.selectedCarId).subscribe(response=>{
      this.carDetail = response.data
      this.lat = response.data.lat
      this.lng = response.data.lng
      this.isRent = response.data.rent
      this.getCoords(response.data.id)
      this.getCoords2()
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


  /////////////////////////////////////GÖRSEL EKLE

}
