import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonViComponent } from './don-vi.component';
import { NbCardModule } from '@nebular/theme';
import { DonViThietKeModule } from '@shared/components/don-vi-thiet-ke/don-vi-thiet-ke.module';



@NgModule({
  declarations: [DonViComponent],
  imports: [
    CommonModule, NbCardModule, DonViThietKeModule  ],
  exports: [DonViComponent]
})
export class DonViModule { }
