import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnasayfaComponent } from './anasayfa.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AnasayfaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AnasayfaComponent
  ]
})
export class AnasayfaModule { }
