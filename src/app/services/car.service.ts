import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CarDetailsModel } from '../models/carDetailsModel';
import { CarModel } from '../models/carModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44312/api/Cars/"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<CarModel>>{
    let newPath = this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<CarModel>>(newPath);
  }
  getById(id:number):Observable<SingleResponseModel<CarModel>>{
    let newPath = this.apiUrl+"getbyid?id="+id
    return this.httpClient.get<SingleResponseModel<CarModel>>(newPath);
  }
  getCarDetails():Observable<ListResponseModel<CarDetailsModel>>{
    let newPath= this.apiUrl+"getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetailsModel>>(newPath)
  }
  getCarDetailsByRent():Observable<ListResponseModel<CarDetailsModel>>{
    let newPath= this.apiUrl+"getcardetailsbyrent"
    return this.httpClient.get<ListResponseModel<CarDetailsModel>>(newPath)
  }
  updateRent(car:CarModel):Observable<ResponseModel>{
    let newPath = this.apiUrl+"update"
    return this.httpClient.post<ResponseModel>(newPath,car)
  }
}
