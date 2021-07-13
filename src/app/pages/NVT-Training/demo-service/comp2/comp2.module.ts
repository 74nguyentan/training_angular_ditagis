import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from './comp2.component';
import { FormsModule } from '@angular/forms';
import { NbInputModule } from '@nebular/theme';



@NgModule({
  declarations: [Comp2Component],
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
  ],
  exports:[Comp2Component]
})
export class Comp2Module { }
