import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoordModel } from '../models/coordModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CoordService {
  apiUrl = "https://localhost:44312/api/Coords/"
  constructor(private httpClient:HttpClient) { }

  getAllByCarId(id:number):Observable<ListResponseModel<CoordModel>>{
    let newPath = this.apiUrl+"getallbycarid?id="+id
    return this.httpClient.get<ListResponseModel<CoordModel>>(newPath)
  }
}
