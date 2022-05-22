import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44312/api/Auth/"
  constructor( private httpClient:HttpClient) { }

  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    let newPath = this.apiUrl+"login";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel);
  }
  register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{
    let newPath = this.apiUrl+"register";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,registerModel);
  }
}
