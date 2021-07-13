import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellTienDoComponent } from './cell-tien-do.component';



@NgModule({
  declarations: [CellTienDoComponent],
  imports: [
    CommonModule
  ],
  exports:[CellTienDoComponent]
})
export class CellTienDoModule { }
