import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemMoiVanBanComponent } from './them-moi-van-ban.component';
import { FormsModule } from '@angular/forms';
import { NbCardModule, NbInputModule, NbButtonModule, NbSelectModule, NbPopoverModule, NbIconModule, NbListModule } from '@nebular/theme';
import { DnDialogModule } from 'ditagis-nebular';
import { QuanLyTepModule } from '@shared/components/quan-ly-tep/quan-ly-tep.module';
import { SelectTenCtXayDungModule } from '@shared/components/select-ten-ct-xay-dung/select-ten-ct-xay-dung.module';



@NgModule({
  declarations: [ThemMoiVanBanComponent],
  imports: [
    CommonModule, NbCardModule, NbInputModule, NbButtonModule, NbSelectModule, NbPopoverModule,
    NbIconModule, FormsModule, NbListModule, DnDialogModule,
    QuanLyTepModule, SelectTenCtXayDungModule
  ],
  exports: [ThemMoiVanBanComponent]
})
export class ThemMoiVanBanModule { }
