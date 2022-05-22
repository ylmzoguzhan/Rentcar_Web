import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CarModel } from '../models/carModel';
import { ListResponseModel } from '../models/listResponseModel';

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
}
