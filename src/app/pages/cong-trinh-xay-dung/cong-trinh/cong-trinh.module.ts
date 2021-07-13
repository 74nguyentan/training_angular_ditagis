import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongTrinhComponent } from './cong-trinh.component';
import { RouterModule } from '@angular/router';
import { ChiTietComponent } from './chi-tiet/chi-tiet.component';
import {
  NbBadgeModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbSelectModule,
  NbTooltipModule,
} from '@nebular/theme';
import { DnDialogModule } from 'ditagis-nebular';
import { FormsModule } from '@angular/forms';
import { DnAutoCompleteModule } from 'ditagis-nebular';
import { HanhChinhModule } from '@shared/components/hanh-chinh/hanh-chinh.module';
import { ExportExcelModule, NgnDatatableModule } from 'ngn-datatable';
import { SelectChuDauTuModule } from '@shared/components/select-chu-dau-tu/select-chu-dau-tu.module';
import { SelectTenCongTrinhModule } from '@shared/components/select-ten-cong-trinh/select-ten-cong-trinh.module';
import { LoaiCtCheckboxModule } from '@shared/components/loai-ct-checkbox/loai-ct-checkbox.module';
import { ChiTietModule } from './chi-tiet/chi-tiet.module';
import { SelectTenCtXayDungModule } from '@shared/components/select-ten-ct-xay-dung/select-ten-ct-xay-dung.module';
import { TienDoCheckboxModule } from '@shared/components/tien-do-checkbox/tien-do-checkbox.module';
import { CellTienDoModule } from '@shared/components/cell-tien-do/cell-tien-do.module';
import { XuatExcelModule } from '@shared/components/xuat-excel/xuat-excel.module';
import { TableCellDiaChiModule } from '@shared/components/table/cells/table-cell-dia-chi/table-cell-dia-chi.module';

@NgModule({
  declarations: [CongTrinhComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbButtonModule,
    DnDialogModule,
    NbTooltipModule,
    FormsModule,
    NbSelectModule,
    NbIconModule,
    NbListModule,
    NbCheckboxModule,
    NbBadgeModule,
    NbInputModule,
    DnAutoCompleteModule,
    HanhChinhModule,
    NgnDatatableModule,
    XuatExcelModule,
    ExportExcelModule,
    SelectChuDauTuModule,
    SelectTenCongTrinhModule,
    NbCardModule,
    LoaiCtCheckboxModule,
    SelectTenCtXayDungModule,
    TableCellDiaChiModule,
    ChiTietModule,
    CellTienDoModule,
    TienDoCheckboxModule,
    RouterModule.forChild([
      {
        path: '',
        component: CongTrinhComponent,
      },
      { path: ':id', component: ChiTietComponent },
    ]),
  ],
})
export class CongTrinhModule {}
