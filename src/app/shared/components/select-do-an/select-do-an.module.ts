import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDoAnComponent } from './select-do-an.component';
import { DnAutoCompleteModule } from 'ditagis-nebular';



@NgModule({
  declarations: [SelectDoAnComponent],
  imports: [
    CommonModule, DnAutoCompleteModule
  ],
  exports: [SelectDoAnComponent]
})
export class SelectDoAnModule { }
