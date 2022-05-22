import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Router, RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:HomeComponent}
    ]),
    MatSliderModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
