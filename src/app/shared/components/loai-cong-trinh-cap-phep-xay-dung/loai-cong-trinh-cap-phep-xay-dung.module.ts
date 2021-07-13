import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaiCongTrinhCapPhepXayDungComponent } from './loai-cong-trinh-cap-phep-xay-dung.component';
import { DnAutoCompleteModule } from 'ditagis-nebular';

@NgModule({
  declarations: [LoaiCongTrinhCapPhepXayDungComponent],
  imports: [CommonModule, DnAutoCompleteModule],
  exports: [LoaiCongTrinhCapPhepXayDungComponent],
})
export class LoaiCongTrinhCapPhepXayDungModule {}
