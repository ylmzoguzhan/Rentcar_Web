import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentsModule } from './rents/rents.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CarsModule } from './cars/cars.module';
import { UsersModule } from './users/users.module';
import { CardetailsModule } from './cardetails/cardetails.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RentsModule,
    DashboardModule,
    CarsModule,
    UsersModule,
    CardetailsModule
  ],
  exports:[
    RentsModule,
    DashboardModule,
    CarsModule,
    UsersModule,
    CardetailsModule
  ]
})
export class ComponentsModule { }
