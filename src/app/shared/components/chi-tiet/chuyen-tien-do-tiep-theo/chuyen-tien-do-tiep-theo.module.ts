import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbPopoverModule, NbSpinnerModule, NbTooltipModule } from '@nebular/theme';
import { ShareChuyenTienDoTiepTheoComponent } from './chuyen-tien-do-tiep-theo.component';

@NgModule({
  imports: [
    CommonModule,NbButtonModule,NbTooltipModule,NbSpinnerModule,
    NbPopoverModule,NbCardModule
  ],
  declarations: [ShareChuyenTienDoTiepTheoComponent],exports:[ShareChuyenTienDoTiepTheoComponent]
})
export class ShareChuyenTienDoTiepTheoModule { }
