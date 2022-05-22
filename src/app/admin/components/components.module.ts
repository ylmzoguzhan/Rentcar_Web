import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentsModule } from './rents/rents.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CarsModule } from './cars/cars.module';
import { UsersModule } from './users/users.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RentsModule,
    DashboardModule,
    CarsModule,
    UsersModule
  ],
  exports:[
    RentsModule,
    DashboardModule,
    CarsModule,
    UsersModule
  ]
})
export class ComponentsModule { }
