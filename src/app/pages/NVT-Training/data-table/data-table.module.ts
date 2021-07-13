import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { NgnDatatableModule } from 'ngn-datatable';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgnDatatableModule,
    RouterModule.forChild(
      [
        { path: '', redirectTo: 'view-table', pathMatch: 'full' },
        {
          path: 'view-table', loadChildren: () =>
            import('./table/table.module').then((t) => t.TableModule)
        }
      ]
    )
  ]
})
export class DataTableModule { }
