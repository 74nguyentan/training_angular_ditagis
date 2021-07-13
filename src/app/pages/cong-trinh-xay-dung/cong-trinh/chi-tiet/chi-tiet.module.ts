import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietComponent } from './chi-tiet.component';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbTabsetModule,
} from '@nebular/theme';
import { DnDialogModule } from 'ditagis-nebular';
import { DnAutoCompleteModule } from 'ditagis-nebular';
import { HinhAnhModule } from 'src/app/pages/cong-trinh-xay-dung/shared/components/chi-tiet-ctxd/hinh-anh/hinh-anh.module';
import { DonViModule } from 'src/app/pages/cong-trinh-xay-dung/shared/components/chi-tiet-ctxd/don-vi/don-vi.module';
import { TaiLieuDinhKemModule } from 'src/app/pages/cong-trinh-xay-dung/shared/components/chi-tiet-ctxd/tai-lieu-dinh-kem/tai-lieu-dinh-kem.module';
import { BanDoModule } from 'src/app/pages/cong-trinh-xay-dung/shared/components/chi-tiet-ctxd/ban-do/ban-do.module';
import { FormsModule } from '@angular/forms';
import { QuyMoCtxdModule } from 'src/app/pages/cong-trinh-xay-dung/shared/components/chi-tiet-ctxd/quy-mo-ctxd/quy-mo-ctxd.module';
import { HeThongKyThuatModule } from 'src/app/pages/cong-trinh-xay-dung/shared/components/chi-tiet-ctxd/he-thong-ky-thuat/he-thong-ky-thuat.module';

@NgModule({
  declarations: [ChiTietComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    DnDialogModule,
    DnAutoCompleteModule,
    NbAccordionModule,
    QuyMoCtxdModule,
    HeThongKyThuatModule,
    NbSelectModule,
    NbTabsetModule,
    HinhAnhModule,
    DonViModule,
    TaiLieuDinhKemModule,
    BanDoModule,
  ],
})
export class ChiTietModule {}
