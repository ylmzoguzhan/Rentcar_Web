import { Component, OnInit } from '@angular/core';
import { RentModel } from 'src/app/models/rentModel';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.css']
})
export class RentsComponent implements OnInit {
  rents:RentModel[]
  constructor(private rentService:RentService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.rentService.getAll().subscribe(response=>{
      this.rents = response.data;
    })
  }
}
