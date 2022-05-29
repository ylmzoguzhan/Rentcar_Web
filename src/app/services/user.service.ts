import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
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
  getByTc(tc:string):Observable<SingleResponseModel<UserModel>>{
    let newPath= this.apiUrl+"getbytc?tc="+tc;
    return this.httpClient.get<SingleResponseModel<UserModel>>(newPath)
  }
  delete(user:UserModel):Observable<ResponseModel>{
    let newPath = this.apiUrl+"delete";
    return this.httpClient.post<ResponseModel>(newPath,user);
  }
  update(user:UserModel):Observable<ResponseModel>{
    let newPath = this.apiUrl+"update"
    return this.httpClient.post<ResponseModel>(newPath,user);
  }
}
