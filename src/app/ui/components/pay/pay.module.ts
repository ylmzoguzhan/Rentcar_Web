import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayComponent } from './pay.component';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    PayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:PayComponent}
    ]),
    MatListModule,
    MatFormFieldModule,
    MatCardModule
  ],
  exports:[
    PayComponent
  ]
})
export class PayModule { }
