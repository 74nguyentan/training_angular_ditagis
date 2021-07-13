import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VanBanComponent } from './van-ban.component';
import { NbButtonModule } from '@nebular/theme';
import { DnDialogModule } from 'ditagis-nebular';
import { ThemMoiVanBanModule } from '../../them-moi-tai-lieu/them-moi-van-ban/them-moi-van-ban.module';

@NgModule({
  declarations: [VanBanComponent],
  imports: [CommonModule, DnDialogModule, NbButtonModule, ThemMoiVanBanModule],
  exports: [VanBanComponent],
})
export class VanBanModule {}
