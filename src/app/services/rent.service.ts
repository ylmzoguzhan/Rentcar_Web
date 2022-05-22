import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentModel } from '../models/rentModel';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  apiUrl="https://localhost:44312/api/Rents/"
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<ListResponseModel<RentModel>>{
    let newPath = this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<RentModel>>(newPath);
  }
}
