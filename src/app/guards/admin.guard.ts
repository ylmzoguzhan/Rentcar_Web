import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { gercekTokenModel } from '../models/gercekTokenModel';
import jwt_decode from "jwt-decode";
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router) {
    
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let test = localStorage.getItem("token"); 
      if(test){
        let obj:gercekTokenModel = jwt_decode(test);
          if(typeof obj.roles == 'object'){
            for (let i = 0; i < obj.roles.length; i++) {
              console.log("for çalıştı")
              if(obj.roles[i]=="Admin"){
                console.log("if çalıştı")
                return true;
              }
            }
          }else{
            if(obj.roles=="Admin"){
              return true;
            }
          }
    }
    this.router.navigate([""]);
    alert("Yetkiniz yok");
    return false;
  }
  
}
