import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:DashboardComponent}
    ])
  ],
  exports:[
    DashboardComponent,
    FooterComponent,
    HeaderComponent
    
  ]
})
export class DashboardModule { }
