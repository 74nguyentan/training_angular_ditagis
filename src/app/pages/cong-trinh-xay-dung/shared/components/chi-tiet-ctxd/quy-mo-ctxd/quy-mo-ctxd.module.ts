import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuyMoCtxdComponent } from './quy-mo-ctxd.component';
import { FormsModule } from '@angular/forms';
import { DnAutoCompleteModule, DnDialogModule } from 'ditagis-nebular';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { DnInputModule } from 'ditagis-nebular';
import { NgxNumberFormatModule } from 'ngx-number-format';

@NgModule({
  declarations: [QuyMoCtxdComponent],
  imports: [
    CommonModule,
    FormsModule,
    DnAutoCompleteModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    DnDialogModule,
    DnInputModule,
    NgxNumberFormatModule,
  ],
  exports: [QuyMoCtxdComponent],
})
export class QuyMoCtxdModule {}
