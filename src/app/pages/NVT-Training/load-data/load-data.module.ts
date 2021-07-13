import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'view-data', pathMatch: 'full' },
      {
        path: 'view-data', loadChildren: () => 
          import('./comp-data/comp-data.module').then((t) => t.CompDataModule)
      }
    ])
  ]
})
export class LoadDataModule { }
