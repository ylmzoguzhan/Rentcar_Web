import { Component, OnInit } from '@angular/core';
import { RentDetailsModel } from 'src/app/models/rentDetailsModel';
import { RentModel } from 'src/app/models/rentModel';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.css']
})
export class RentsComponent implements OnInit {
  rents:RentDetailsModel[]
  constructor(private rentService:RentService) { }

  ngOnInit(): void {
    this.getAllDetails();
  }
  getAllDetails(){
    this.rentService.getAllDetails().subscribe(response=>{
      this.rents = response.data;
    })
  }
}
