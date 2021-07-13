import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCapCongTrinhComponent } from './select-cap-cong-trinh.component';
import { DnAutoCompleteModule } from 'ditagis-nebular';

@NgModule({
  imports: [CommonModule, DnAutoCompleteModule],
  declarations: [SelectCapCongTrinhComponent],
  exports: [SelectCapCongTrinhComponent],
})
export class SelectCapCongTrinhModule {}
