import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { FooterComponent } from '../dashboard/footer/footer.component';
import {MatTableModule} from '@angular/material/table';
import { CardetailsModule } from '../cardetails/cardetails.module';


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
