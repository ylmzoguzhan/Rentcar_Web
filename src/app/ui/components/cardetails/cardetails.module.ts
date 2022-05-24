import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardetailsComponent } from './cardetails.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

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
    MatListModule
  ],
  exports:[
    CardetailsComponent
  ]
})
export class CardetailsModule { }
