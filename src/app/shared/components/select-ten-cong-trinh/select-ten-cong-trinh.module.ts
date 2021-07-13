import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectTenCongTrinhComponent } from './select-ten-cong-trinh.component';
import { DnAutoCompleteModule } from 'ditagis-nebular';

@NgModule({
  declarations: [SelectTenCongTrinhComponent],
  imports: [CommonModule, DnAutoCompleteModule],
  exports: [SelectTenCongTrinhComponent],
})
export class SelectTenCongTrinhModule {}
