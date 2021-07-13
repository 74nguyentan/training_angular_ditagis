import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { RoleGuard } from '../shared/services/guards/role.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesComponent } from './pages.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [PagesComponent, NotFoundComponent, DefaultComponent],
  imports: [
    CommonModule,
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbMenuModule,
    RouterModule.forChild([
      {
        path: '',
        component: PagesComponent,
        children: [
          { path: '', component: DefaultComponent },
          {
            path: 'cong-trinh-xay-dung',
            loadChildren: () =>
              import('./cong-trinh-xay-dung/cong-trinh-xay-dung.module').then(
                (m) => m.CongTrinhXayDungModule
              ),
          },
          {
            path: 'training',
            loadChildren: () =>
              import('./training/training.module').then(
                (m) => m.TrainingModule
              ),
          },
          {
            path: 'input-output',
            loadChildren: () =>
              import('./NVT-Training/input-output/input-output.module').then(
                (m) => m.InputOutputModule
              ),
          },
          {
            path: 'viewchild',
            loadChildren: () =>
              import('./NVT-Training/view-child/view-child.module').then(
                (m) => m.ViewChildModule
              ),
          },
          {
            path: 'demo-service',
            loadChildren: () =>
              import('./NVT-Training/demo-service/demo-service.module').then(
                (m) => m.DemoServiceModule
              ),
          },
          {
            path: 'load-data',
            loadChildren: () =>
              import('./NVT-Training/load-data/load-data.module').then(
                (m) => m.LoadDataModule
              ),
          },
          {
            path: 'data-table',
            loadChildren: () =>
              import('./NVT-Training/data-table/data-table.module').then(
                (m) => m.DataTableModule
              ),
          },
          {
            path: '**',
            component: NotFoundComponent,
          },
        ],
      },
    ]),
  ],
})
export class PagesRoutingModule {}
