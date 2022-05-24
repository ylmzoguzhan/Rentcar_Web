import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardetailsComponent } from './cardetails.component';
import { RouterModule } from '@angular/router';

import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [
    CardetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:CardetailsComponent}
    ]),
    NgxFileDropModule
  ],
  exports:[
    CardetailsComponent
  ]
})
export class CardetailsModule { }
