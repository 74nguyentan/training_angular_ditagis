import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RouterModule } from '@angular/router';
import { NgnDatatableModule } from 'ngn-datatable';
import { DnAutoCompleteModule } from 'ditagis-nebular';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    NgnDatatableModule,
    DnAutoCompleteModule,
    RouterModule.forChild(
      [
        { path: '', component: TableComponent }
      ]
    )
  ]
})
export class TableModule { }
