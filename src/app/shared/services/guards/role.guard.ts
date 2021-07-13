import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { map, tap } from 'rxjs/operators';
import { DTGAuthService } from 'ditagis-auth';
import { ChucNangTaiKhoanService } from '../phan-quyen/chuc-nang-tai-khoan/chuc-nang-tai-khoan.service';
import { ChucNangNguoiDungEntity } from '../phan-quyen/chuc-nang-tai-khoan/chuc-nang-tai-khoan.interface';
import { isNullOrUndefined } from 'ngn-datatable';
@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: DTGAuthService,
    private toast: NbToastrService,
    private cntkService: ChucNangTaiKhoanService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const appId = next.data.appId as string;
    if (isNullOrUndefined(appId)) {
      return true;
    }
    return this.cntkService
      .getMany({
        filter: [
          {
            field: 'applicationId' as keyof ChucNangNguoiDungEntity,
            operator: '$eq',
            value: appId,
          },
          {
            field: 'userId' as keyof ChucNangNguoiDungEntity,
            operator: '$eq',
            value: this.authService.getInfo().userId,
          },
        ],
      })
      .pipe(
        map((m) => (m.length ? true : false)),
        tap((isAccess) => {
          if (!isAccess) {
            this.toast.danger('Không có quyền truy cập');
            // this.authService.deAuthenticate();
            // location.reload();
          }
        })
      );
  }
}
