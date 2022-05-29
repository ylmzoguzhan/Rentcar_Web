import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandModel } from '../models/brandModel';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44312/api/Brands/"
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<ListResponseModel<BrandModel>>{
    let newPath = this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<BrandModel>>(newPath)
  }
  getByName(name:string):Observable<SingleResponseModel<BrandModel>>{
    let newPath = this.apiUrl+"getbyname?name="+name
    return this.httpClient.get<SingleResponseModel<BrandModel>>(newPath)
  }
}
