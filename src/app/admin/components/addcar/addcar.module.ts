import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcarComponent } from './addcar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddcarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:"",component:AddcarComponent
    }]),
  ],
  exports:[
    AddcarComponent
  ]
})
export class AddcarModule { }
