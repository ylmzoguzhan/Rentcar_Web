import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardetailsComponent } from './cardetails.component';
import { RouterModule } from '@angular/router';

import { NgxFileDropModule } from 'ngx-file-drop';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    CardetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:CardetailsComponent}
    ]),
    NgxFileDropModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgrnOWoVT4Skhe1Ik5L8v9B3JREsRbb8w',
    })
  ],
  exports:[
    CardetailsComponent
  ]
})
export class CardetailsModule { }
