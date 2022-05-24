import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Router, RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:HomeComponent}
    ]),
    MatSliderModule,
    MatCardModule,
    MatListModule,
    MatStepperModule,
    MatIconModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
