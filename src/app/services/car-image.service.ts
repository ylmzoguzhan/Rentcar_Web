import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carImageModel } from '../models/carImageModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl="https://localhost:44312/api/CarImages/"
  constructor(private httpClient:HttpClient) { }

  getByCarId(carId:number):Observable<ListResponseModel<carImageModel>>
  {
    return this.httpClient.get<ListResponseModel<carImageModel>>(this.apiUrl+"getAllByCarId?carId="+carId)
  }
}
