import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoleGuard } from '../../shared/services/guards/role.guard';
import { AppIdEnum } from '../../shared/services/phan-quyen/chuc-nang.interface';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'cong-trinh',
        pathMatch: 'full',
      },
      {
        path: 'cong-trinh',
        data: {
          appId: AppIdEnum['CongTrinhXayDung'],
        },
        canActivate: [RoleGuard],
        loadChildren: () =>
          import('./cong-trinh/cong-trinh.module').then(
            (m) => m.CongTrinhModule
          ),
      },
    ]),
  ],
})
export class CongTrinhXayDungModule {}
