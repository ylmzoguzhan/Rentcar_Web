import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnasayfaComponent } from './anasayfa.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';




@NgModule({
  declarations: [
    AnasayfaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports:[
    AnasayfaComponent
  ]
})
export class AnasayfaModule { }
