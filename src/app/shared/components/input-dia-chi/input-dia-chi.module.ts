import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbInputModule } from '@nebular/theme';
import { DnInputModule } from 'ditagis-nebular';
import { HanhChinhModule } from '../hanh-chinh/hanh-chinh.module';
import { InputDiaChiComponent } from './input-dia-chi.component';

@NgModule({
  imports: [
    CommonModule,
    HanhChinhModule,
    FormsModule,
    NbInputModule,
    DnInputModule,
  ],
  declarations: [InputDiaChiComponent],
  exports: [InputDiaChiComponent],
})
export class InputDiaChiModule {}
