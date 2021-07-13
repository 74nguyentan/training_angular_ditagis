import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { tap } from 'rxjs/operators';
import { DTGAuthService } from 'ditagis-auth';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanActivate {
  constructor(
    private authService: DTGAuthService,
    private toast: NbToastrService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isAccess({ appId: environment.appId.appId }).pipe(
      tap((isAccess) => {
        if (!isAccess) {
          this.authService.deAuthenticate();
          location.reload();
        }
      })
    );
  }
}
