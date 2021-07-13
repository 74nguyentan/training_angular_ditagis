import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectTenCtXayDungComponent } from './select-ten-ct-xay-dung.component';
import { DnAutoCompleteModule } from 'ditagis-nebular';

@NgModule({
  declarations: [SelectTenCtXayDungComponent],
  imports: [CommonModule, DnAutoCompleteModule],
  exports: [SelectTenCtXayDungComponent],
})
export class SelectTenCtXayDungModule {}
