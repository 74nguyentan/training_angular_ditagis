import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonViComponent } from './don-vi/don-vi.component';
import { ChungChiComponent } from './chung-chi/chung-chi.component';
import { VaiTroComponent } from './vai-tro/vai-tro.component';
import { DnAutoCompleteModule } from 'ditagis-nebular';
import {
  NbButtonModule,
  NbDatepickerModule,
  NbInputModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VaiTroComponent, DonViComponent, ChungChiComponent],
  imports: [
    CommonModule,
    DnAutoCompleteModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    NbDatepickerModule,
  ],
  exports: [VaiTroComponent, DonViComponent, ChungChiComponent],
})
export class DonViThietKeModule {}
