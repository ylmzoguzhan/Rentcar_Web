import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token=false
  isAdmin=false
  constructor() { }

  ngOnInit(): void {
    let token = localStorage.getItem("token")
    if(token==null){
      this.token=false
    }else{
      this.token=true
    }
    let rol = localStorage.getItem("rol")
    if(rol == "Admin"){
      this.isAdmin = true
    }else{
      this.isAdmin=false;
    }
  }

}
