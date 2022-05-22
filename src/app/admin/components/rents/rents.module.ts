import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentsComponent } from './rents.component';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from 'src/app/ui/components/components.module';
import { FooterComponent } from '../dashboard/footer/footer.component';
import { AdminModule } from '../../admin.module';



@NgModule({
  declarations: [
    RentsComponent
    //FooterComponent,
    //HeaderComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:RentsComponent}
    ]),
    
  ],
  exports:[
    RentsComponent
  ]

})
export class RentsModule { }
