import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DTGSimpleGuard } from 'ditagis-auth';
import { AppGuard } from './shared/services/guards/app.guard';
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    canActivate: [DTGSimpleGuard,AppGuard],
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesRoutingModule),
  }
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
