import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyRentsComponent } from './my-rents.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:MyRentsComponent}
    ])
  ]
})
export class MyRentsModule { }
