import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapCongTrinhCapPhepXayDungComponent } from './cap-cong-trinh-cap-phep-xay-dung.component';
import { DnAutoCompleteModule } from 'ditagis-nebular';

@NgModule({
  declarations: [CapCongTrinhCapPhepXayDungComponent],
  imports: [CommonModule, DnAutoCompleteModule],
  exports: [CapCongTrinhCapPhepXayDungComponent],
})
export class CapCongTrinhCapPhepXayDungModule {}
