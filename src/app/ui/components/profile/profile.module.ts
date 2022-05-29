import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { MyRentsComponent } from './my-rents/my-rents.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RightComponent } from './right/right.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProfileComponent,
    MyRentsComponent,
    MyAccountComponent,
    RightComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ProfileComponent}
    ]),
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    FormsModule
  ],
  exports:[
    ProfileComponent,
    MyRentsComponent,
    MyAccountComponent
  ]
})
export class ProfileModule { }
