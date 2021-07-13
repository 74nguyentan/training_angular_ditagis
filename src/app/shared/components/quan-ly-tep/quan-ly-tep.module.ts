import { NgnDatatableModule } from 'ngn-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyTepComponent } from './quan-ly-tep.component';
import {
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbSelectModule,
  NbPopoverModule,
  NbIconModule,
  NbListModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { KhongGianCuaToiModule } from './table/khong-gian-cua-toi/khong-gian-cua-toi.module';
import { DuocChiaSeModule } from './table/duoc-chia-se/duoc-chia-se.module';

@NgModule({
  declarations: [QuanLyTepComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbPopoverModule,
    NbIconModule,
    FormsModule,
    NgnDatatableModule,
    NbListModule,
    DuocChiaSeModule,
    KhongGianCuaToiModule
  ],
  exports: [QuanLyTepComponent],
})
export class QuanLyTepModule {}
