import { QuanLyTepModule } from '../../../../../../shared/components/quan-ly-tep/quan-ly-tep.module';
import { FormsModule } from '@angular/forms';
import { HinhAnhComponent } from './hinh-anh.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NbTabsetModule,
  NbCardModule,
  NbSpinnerModule,
  NbButtonModule,
  NbSelectModule,
  NbInputModule,
  NbIconModule,
  NbAlertModule
} from '@nebular/theme';
import { DnDialogModule, DnAutoCompleteModule } from 'ditagis-nebular';

@NgModule({
  declarations: [HinhAnhComponent],
  imports: [
    CommonModule,
    NbTabsetModule,
    NbCardModule,
    NbSpinnerModule,
    DnDialogModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
    FormsModule,
    DnAutoCompleteModule,
    QuanLyTepModule,
    NbIconModule,
    NbAlertModule
  ],
  exports: [HinhAnhComponent]
})
export class HinhAnhModule {}
