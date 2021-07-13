import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DnAutoCompleteModule } from 'ditagis-nebular';
import { SelectLoaiCongTrinhComponent } from './select-loai-cong-trinh.component';

@NgModule({
  imports: [CommonModule, DnAutoCompleteModule],
  declarations: [SelectLoaiCongTrinhComponent],
  exports: [SelectLoaiCongTrinhComponent],
})
export class SelectLoaiCongTrinhModule {}
