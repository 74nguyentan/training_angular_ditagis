import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaiLieuDinhKemComponent } from './tai-lieu-dinh-kem.component';
import { NbCardModule } from '@nebular/theme';
import { VanBanModule } from '../loai-tai-lieu-dinh-kem/van-ban/van-ban.module';

@NgModule({
  declarations: [TaiLieuDinhKemComponent],
  imports: [CommonModule, NbCardModule, VanBanModule],
  exports: [TaiLieuDinhKemComponent],
})
export class TaiLieuDinhKemModule {}
