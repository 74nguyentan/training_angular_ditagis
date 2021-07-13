import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { RouterModule } from '@angular/router';
import { ChildrenModule } from '../children/children.module';
import { NbInputModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    ChildrenModule,
    NbInputModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ParentComponent }
  ]),
    
  ]
})
export class ParentModule { }
