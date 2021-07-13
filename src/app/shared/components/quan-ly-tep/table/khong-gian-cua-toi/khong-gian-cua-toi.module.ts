import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KhongGianCuaToiComponent } from './khong-gian-cua-toi.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbPopoverModule, NbSelectModule } from '@nebular/theme';
import { NgnDatatableModule } from 'ngn-datatable';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [KhongGianCuaToiComponent],
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
  exports: [KhongGianCuaToiComponent]
  
})
export class KhongGianCuaToiModule { }
