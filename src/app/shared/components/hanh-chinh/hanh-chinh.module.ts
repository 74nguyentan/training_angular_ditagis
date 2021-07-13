import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanHuyenComponent } from './quan-huyen/quan-huyen.component';
import { PhuongXaComponent } from './phuong-xa/phuong-xa.component';
import { DnAutoCompleteModule } from 'ditagis-nebular';
import { TinhTpComponent } from './tinh-tp/tinh-tp.component';

@NgModule({
  declarations: [QuanHuyenComponent, PhuongXaComponent, TinhTpComponent],
  imports: [CommonModule, DnAutoCompleteModule],
  exports: [QuanHuyenComponent, PhuongXaComponent, TinhTpComponent],
})
export class HanhChinhModule {}
