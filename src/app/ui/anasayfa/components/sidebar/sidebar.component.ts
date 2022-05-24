import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  token=false
  constructor() { }

  ngOnInit(): void {
      let token = localStorage.getItem("token")
      if(token==null){
        this.token = false
      }else{
        this.token=true;
      }    
    }
    exit(){
      localStorage.clear()
      window.location.reload();
    }
  }

