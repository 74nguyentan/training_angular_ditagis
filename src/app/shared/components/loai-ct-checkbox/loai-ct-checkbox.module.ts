import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaiCtCheckboxComponent } from './loai-ct-checkbox.component';
import { NbBadgeModule, NbCheckboxModule } from '@nebular/theme';

@NgModule({
  declarations: [LoaiCtCheckboxComponent],
  imports: [CommonModule, NbBadgeModule, NbCheckboxModule],
  exports: [LoaiCtCheckboxComponent],
})
export class LoaiCtCheckboxModule {}
