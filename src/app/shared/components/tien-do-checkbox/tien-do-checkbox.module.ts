import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TienDoCheckboxComponent } from './tien-do-checkbox.component';
import { NbBadgeModule, NbCheckboxModule } from '@nebular/theme';



@NgModule({
  declarations: [TienDoCheckboxComponent],
  imports: [
    CommonModule,NbBadgeModule, NbCheckboxModule
  ],
  exports:[TienDoCheckboxComponent]
})
export class TienDoCheckboxModule { }
