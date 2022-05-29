import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentsModule } from './rents/rents.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CarsModule } from './cars/cars.module';
import { UsersModule } from './users/users.module';
import { CardetailsModule } from './cardetails/cardetails.module';
import { CareditComponent } from './caredit/caredit.component';
import { CareditModule } from './caredit/caredit.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RentsModule,
    DashboardModule,
    CarsModule,
    UsersModule,
    CardetailsModule,
    CareditModule
  ],
  exports:[
    RentsModule,
    DashboardModule,
    CarsModule,
    UsersModule,
    CardetailsModule,
    CareditModule
  ]
})
export class ComponentsModule { }
