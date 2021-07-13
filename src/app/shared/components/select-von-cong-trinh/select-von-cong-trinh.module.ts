import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectVonCongTrinhComponent } from './select-von-cong-trinh.component';
import { DnAutoCompleteModule } from 'ditagis-nebular';



@NgModule({
  declarations: [SelectVonCongTrinhComponent],
  imports: [
    CommonModule, DnAutoCompleteModule
  ],
  exports: [SelectVonCongTrinhComponent]
})
export class SelectVonCongTrinhModule { }
