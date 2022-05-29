import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandModel } from '../models/brandModel';
import { GearModel } from '../models/gearModel';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GearService {
  apiUrl = "https://localhost:44312/api/Gears/"
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<ListResponseModel<GearModel>>{
    let newPath = this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<GearModel>>(newPath)
  }
  getByName(name:string):Observable<SingleResponseModel<GearModel>>{
    let newPath = this.apiUrl+"getbyname?name="+name
    return this.httpClient.get<SingleResponseModel<GearModel>>(newPath)
  }
}
