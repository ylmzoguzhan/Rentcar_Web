import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnasayfaComponent } from './anasayfa.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    AnasayfaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    MatSidenavModule
  ],
  exports:[
    AnasayfaComponent
  ]
})
export class AnasayfaModule { }
