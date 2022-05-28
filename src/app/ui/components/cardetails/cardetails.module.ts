import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardetailsComponent } from './cardetails.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    CardetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:"",component:CardetailsComponent
    }]),
    MatButtonModule,
    MatListModule,
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyBgrnOWoVT4Skhe1Ik5L8v9B3JREsRbb8w',
    })
  ],
  exports:[
    CardetailsComponent
  ]
})
export class CardetailsModule { }
