import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child02Component } from './child02.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Child02Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[Child02Component]

})
export class Child02Module { }
