import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyAccountComponent } from './my-account.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:MyAccountComponent}
    ]),
    FormsModule
  ]
})
export class MyAccountModule { }
