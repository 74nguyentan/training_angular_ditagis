import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child03Component } from './child03.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Child03Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[Child03Component]
})
export class Child03Module { }
