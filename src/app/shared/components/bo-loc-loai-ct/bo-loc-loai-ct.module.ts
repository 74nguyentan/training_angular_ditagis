import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoLocLoaiCtComponent } from './bo-loc-loai-ct.component';
import { FormsModule } from '@angular/forms';
import { NbCheckboxModule } from '@nebular/theme';
import { LoaiCtCheckboxModule } from '../loai-ct-checkbox/loai-ct-checkbox.module';

@NgModule({
  declarations: [BoLocLoaiCtComponent],
  imports: [CommonModule, FormsModule, NbCheckboxModule, LoaiCtCheckboxModule],
  exports: [BoLocLoaiCtComponent],
})
export class BoLocLoaiCtModule {}
