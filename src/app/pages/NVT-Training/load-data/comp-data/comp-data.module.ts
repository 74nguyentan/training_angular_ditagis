import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompDataComponent } from './comp-data.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CompDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:'', component:CompDataComponent}
      ]
    )
  ]
})
export class CompDataModule { }
