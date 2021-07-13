import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThoiGianTienDoComponent } from './thoi-gian-tien-do.component';
import { NbBadgeModule, NbTooltipModule } from '@nebular/theme';
const modules = [CommonModule, NbTooltipModule, NbBadgeModule];

@NgModule({
  declarations: [ThoiGianTienDoComponent],
  imports: [
    modules
  ],
  exports:[ThoiGianTienDoComponent,modules]
})
export class ThoiGianTienDoModule { }
