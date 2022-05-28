import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    CarsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:CarsComponent}
    ]),
    MatTableModule
  ]
})
export class CarsModule { }
