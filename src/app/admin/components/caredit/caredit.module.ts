import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareditComponent } from './caredit.component';
import { RouterModule } from '@angular/router';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CareditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:CareditComponent}
    ]),
    AngularFileUploaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CareditModule { }
