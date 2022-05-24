import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImageAddModel } from '../models/carImageAddModel';
import { carImageModel } from '../models/carImageModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl="https://localhost:44312/api/CarImages/"
  constructor(private httpClient:HttpClient) { }

  getByCarId(carId:number):Observable<ListResponseModel<carImageModel>>
  {
    return this.httpClient.get<ListResponseModel<carImageModel>>(this.apiUrl+"getbycarid?carId="+carId)
  }
  getAll():Observable<ListResponseModel<carImageModel>>{
    return this.httpClient.get<ListResponseModel<carImageModel>>(this.apiUrl+"getall")
  }
  getPathByCarId(carId:number):Observable<ListResponseModel<carImageModel>>{
    return this.httpClient.get<ListResponseModel<carImageModel>>(this.apiUrl+"getpathbycarid"+carId)
  }
  add(image:File, carId:number):Observable<ResponseModel>{
    const sendForm = new FormData();
    sendForm.append('carId', JSON.stringify(carId))
    sendForm.append('carImage', image, image.name)
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",sendForm);
  }
}
