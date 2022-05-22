import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "https://localhost:44312/api/Users/"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<UserModel>>{
    let newPath = this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<UserModel>>(newPath);
  }
}
