import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { RouterModule } from '@angular/router';
import { ChildrenModule } from '../children-demo/children-demo.module';
import { Child02Module } from '../child02/child02.module';
import { Child03Module } from '../child03/child03.module';
import { NgnDatatableModule } from 'ngn-datatable';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbInputModule } from '@nebular/theme';
import { DnAutoCompleteModule } from 'ditagis-nebular';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    ChildrenModule,
    Child02Module,
    CommonModule,
    Child03Module,
    FormsModule,
    NbInputModule,
    DnAutoCompleteModule,
    NbButtonModule,
    NgnDatatableModule,
    RouterModule.forChild([{ path: '', component: DemoComponent }
  ]),
  ],
})
export class DemoModule {}
