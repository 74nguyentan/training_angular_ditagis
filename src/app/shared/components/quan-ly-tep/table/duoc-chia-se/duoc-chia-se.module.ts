import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuocChiaSeComponent } from './duoc-chia-se.component';
import { FormsModule } from '@angular/forms';
import { NbCardModule, NbInputModule, NbButtonModule, NbSelectModule, NbPopoverModule, NbIconModule, NbListModule } from '@nebular/theme';
import { NgnDatatableModule } from 'ngn-datatable';



@NgModule({
  declarations: [DuocChiaSeComponent],
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
  ],
  exports: [DuocChiaSeComponent]
})
export class DuocChiaSeModule { }
