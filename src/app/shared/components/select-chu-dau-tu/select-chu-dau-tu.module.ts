import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbInputModule } from '@nebular/theme';
import {
  DnAutoCompleteModule,
  DnDialogModule,
  DnInputModule,
} from 'ditagis-nebular';
import { InputDiaChiModule } from '../input-dia-chi/input-dia-chi.module';
import { SelectChuDauTuComponent } from './select-chu-dau-tu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DnAutoCompleteModule,
    NbButtonModule,
    DnDialogModule,
    NbInputModule,
    NbButtonModule,
    DnInputModule,
    InputDiaChiModule,
  ],
  declarations: [SelectChuDauTuComponent],
  exports: [SelectChuDauTuComponent],
})
export class SelectChuDauTuModule {}
