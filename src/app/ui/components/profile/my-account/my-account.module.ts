import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyAccountComponent } from './my-account.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:MyAccountComponent}
    ])
  ]
})
export class MyAccountModule { }
