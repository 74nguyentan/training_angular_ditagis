import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChildrenDemoComponent } from './children-demo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChildrenDemoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ChildrenDemoComponent
  ]
})
export class ChildrenModule {}
