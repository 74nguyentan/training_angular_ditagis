import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1.component';
import { FormsModule } from '@angular/forms';
import { NbInputModule } from '@nebular/theme';



@NgModule({
  declarations: [Comp1Component],
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
  ],
  exports:[Comp1Component]
})
export class Comp1Module { }
