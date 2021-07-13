import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrentComponent } from './childrent.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ChildrentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ChildrentComponent]
})
export class ChildrentModule { }
