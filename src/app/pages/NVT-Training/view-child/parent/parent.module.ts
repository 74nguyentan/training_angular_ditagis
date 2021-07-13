import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { RouterModule } from '@angular/router';
import { ChildrentModule } from '../childrent/childrent.module';



@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    ChildrentModule,
    RouterModule.forChild([{ path: '', component: ParentComponent }])
  ]
})
export class ParentModule { }
