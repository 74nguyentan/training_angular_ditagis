import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompParentComponent } from './comp-parent.component';
import { Comp1Module } from '../comp1/comp1.module';
import { Comp2Module } from '../comp2/comp2.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CompParentComponent],
  imports: [
    CommonModule,
    Comp1Module,
    Comp2Module,
    RouterModule.forChild([
      {path:'', component:CompParentComponent}
      
    ])
   
  ]
})
export class CompParentModule { }
