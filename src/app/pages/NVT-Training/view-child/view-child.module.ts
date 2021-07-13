import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        { path: '', redirectTo: 'parent-viewchild', pathMatch: 'full' },
        {
          path: 'parent-viewchild',
          loadChildren: () =>
            import('./parent/parent.module').then((t) => t.ParentModule)
        }
      ]
    )
  ]
})
export class ViewChildModule { }
