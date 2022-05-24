import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token=false
  constructor() { }

  ngOnInit(): void {
    let token = localStorage.getItem("token")
    if(token==null){
      this.token=false
    }else{
      this.token=true
    }
  }

}
