import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectNhanVienComponent } from './select-nhan-vien.component';
import { DnAutoCompleteModule } from 'ditagis-nebular';



@NgModule({
  declarations: [SelectNhanVienComponent],
  imports: [
    CommonModule, DnAutoCompleteModule
  ],
  exports: [SelectNhanVienComponent]
})
export class SelectNhanVienModule { }
