import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'view-comp', pathMatch: 'full' },
      {
        path: 'view-comp', loadChildren: () =>
          import('./comp-parent/comp-parent.module').then((t) => t.CompParentModule)
      }
    ])
  ]
})
export class DemoServiceModule { }
