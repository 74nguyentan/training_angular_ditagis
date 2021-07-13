import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XuatExcelComponent } from './xuat-excel.component';
import { NbButtonModule, NbSpinnerModule, NbTooltipModule } from '@nebular/theme';
import { ExportExcelModule } from 'ngn-datatable';

@NgModule({
  declarations: [XuatExcelComponent],
  imports: [
    CommonModule,
    NbSpinnerModule,
    ExportExcelModule,
    NbButtonModule,
    NbTooltipModule,
  ],
  exports:[XuatExcelComponent]
})
export class XuatExcelModule { }
