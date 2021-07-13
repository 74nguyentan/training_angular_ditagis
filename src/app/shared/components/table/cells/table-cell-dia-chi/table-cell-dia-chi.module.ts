import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbTooltipModule } from '@nebular/theme';
import { TableCellDiaChiComponent } from './table-cell-dia-chi.component';

@NgModule({
  imports: [CommonModule, NbTooltipModule],
  declarations: [TableCellDiaChiComponent],
  exports: [TableCellDiaChiComponent],
})
export class TableCellDiaChiModule {}
