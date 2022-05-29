import { Component, OnInit } from '@angular/core';
import { CarImageAddModel } from 'src/app/models/carImageAddModel';
import { UploadFile } from 'src/app/models/file';
import { CarImageService } from 'src/app/services/car-image.service';

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
  constructor(private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.carAddImage.carId = Number(localStorage.getItem("detailadmincaredit"));
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
      console.log(response)
    })
  }
}
