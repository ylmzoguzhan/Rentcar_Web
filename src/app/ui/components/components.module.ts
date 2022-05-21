import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { CarsModule } from './cars/cars.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ProfileModule,
    CarsModule
  ],
  exports:[
    HomeModule,
    ProfileModule,
    CarsModule
  ]
})
export class ComponentsModule { }
