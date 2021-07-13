import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenComponent } from './children.component';
import { NbInputModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ChildrenComponent],
  imports: [
    CommonModule,
    NbInputModule,
    FormsModule,
  ],
  exports: [ChildrenComponent]
})
export class ChildrenModule { }
