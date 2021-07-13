import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Demo02Component } from './demo02/demo02.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([ 
      { path: '', redirectTo: 'demo', pathMatch: 'full' },

      // lazy loading 
      {
        path: 'demo',
        loadChildren: () =>
          import('./demo/demo.module').then((t) => t.DemoModule),
      },
     
      // default loading 
      {
        path: 'demo02',
        component: Demo02Component
      }
    ]),
  ],
  declarations: [Demo02Component],
})
export class TrainingModule {}
