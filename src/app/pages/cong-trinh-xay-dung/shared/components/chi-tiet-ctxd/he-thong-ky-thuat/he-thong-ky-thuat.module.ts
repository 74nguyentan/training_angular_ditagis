import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeThongKyThuatComponent } from './he-thong-ky-thuat.component';
import { FormsModule } from '@angular/forms';
import { DnAutoCompleteModule, DnDialogModule } from 'ditagis-nebular';
import {
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
} from '@nebular/theme';
import { DnInputModule } from 'ditagis-nebular';
import { NgxNumberFormatModule } from 'ngx-number-format';

@NgModule({
  declarations: [HeThongKyThuatComponent],
  imports: [
    CommonModule,
    FormsModule,
    DnAutoCompleteModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    DnDialogModule,
    NbSelectModule,
    DnInputModule,
    NgxNumberFormatModule,
  ],
  exports: [HeThongKyThuatComponent],
})
export class HeThongKyThuatModule {}
