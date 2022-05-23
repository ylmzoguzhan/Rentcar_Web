import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardetailsComponent } from './cardetails.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:CardetailsComponent}
    ])
  ],
  exports:[
    CardetailsComponent
  ]
})
export class CardetailsModule { }
