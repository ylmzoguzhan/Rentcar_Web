import { Component, OnInit } from '@angular/core';
import { AddCarModel } from 'src/app/models/addCarModel';
import { BrandModel } from 'src/app/models/brandModel';
import { CarModel } from 'src/app/models/carModel';
import { GearModel } from 'src/app/models/gearModel';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { GearService } from 'src/app/services/gear.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  brands:BrandModel[]
  gears:GearModel[]
  selectBrandName:string
  selectGearName:string
  car:AddCarModel={
    brandId:1000,
    capacity:499,
    dailyPrice:100,
    gearId:10,
    lat:10,
    lng:10,
    model:"sss",
    rent:false,
    year:2020
  }
  constructor(private gearService:GearService, private brandService:BrandService, private carService:CarService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getGears();
  }

  getBrands(){
    this.brandService.getAll().subscribe(response=>{
      this.brands = response.data
    })
  }
  getGears(){
    this.gearService.getAll().subscribe(response=>{
      this.gears = response.data
    })
  }
  changeBrand(event:any){
    this.brandService.getByName(event.target.value).subscribe(response=>{
      this.car.brandId = response.data.id
    })
  }
  changeGear(event:any){
    this.selectGearName = event.target.value
    this.gearService.getByName(event.target.value).subscribe(response=>{
      this.car.gearId = response.data.id
    })
  }
  model(event:any){
    this.car.model = event.target.value
  }
  year(event:any){
    this.car.year = Number(event.target.value)
  }
  capacity(event:any){
    this.car.capacity = Number(event.target.value)
  }
  dailyPrice(event:any){
    this.car.dailyPrice = Number(event.target.value)
  }
  lat(event:any){
    this.car.lat = Number(event.target.value)
  }
  lng(event:any){
    this.car.lng = Number(event.target.value)
  }
  add(){
    this.carService.add(this.car).subscribe(response=>{
      console.log(this.car)
      console.log(response)
      alert("Araç eklendi")
      window.location.reload()
    })
  }
  bas(){
    console.log(this.car)
  }
}
