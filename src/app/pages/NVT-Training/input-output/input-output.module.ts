import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', redirectTo: 'parent', pathMatch:'full'},
      {path:'parent', 
      loadChildren:()=>
    import('./parent/parent.module').then((t)=> t.ParentModule)}
    ])
  ]
})
export class InputOutputModule { }
