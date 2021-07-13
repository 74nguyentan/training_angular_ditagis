import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaiCTCNTTCheckboxComponent } from './loai-ct-checkbox-cntk.component';
import { NbBadgeModule, NbCheckboxModule } from '@nebular/theme';

@NgModule({
  declarations: [LoaiCTCNTTCheckboxComponent],
  imports: [CommonModule, NbBadgeModule, NbCheckboxModule],
  exports: [LoaiCTCNTTCheckboxComponent],
})
export class LoaiCTCNTTCheckboxModule {}
