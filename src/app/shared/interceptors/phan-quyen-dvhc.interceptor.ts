import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DTGAuthService } from 'ditagis-auth';
import { first, mergeMap } from 'rxjs/operators';
import { NbToastrService } from '@nebular/theme';
import { ChucNangTaiKhoanService } from '@shared/services/phan-quyen/chuc-nang-tai-khoan/chuc-nang-tai-khoan.service';

@Injectable()
export class PhanQuyenDvhcInterceptor implements HttpInterceptor {
  constructor(
    private activatedRoute: ActivatedRoute,
    private cnndService: ChucNangTaiKhoanService,
    private authService: DTGAuthService,
    private toast: NbToastrService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      request.url.search('rest/cpxd/thong-tin') > -1 ||
      request.url.search('rest/tdcs/thong-tin') > -1 ||
      request.url.search('rest/tdxd/thong-tin') > -1
    ) {
      if (
        request.url.search('rest/cpxd/thong-tin/') === -1 && // bỏ qua getOne
        request.params
          .toString()
          .search('fields=tenCongTrinh,maCTCPXD&limit=10') === -1 &&
        request.url.search('rest/tdcs/thong-tin/') === -1 &&
        request.params
          .toString()
          .search('fields=tenCongTrinh,maCTTDCS&limit=10') === -1 &&
        request.url.search('rest/tdxd/thong-tin/') === -1 &&
        request.params
          .toString()
          .search('fields=tenCongTrinh,maCTTDXD&limit=10') === -1
      ) {
        const snapshot = this.getSnapshot(this.activatedRoute);
        const appId = snapshot.data.appId;
        if (appId) {
          return this.cnndService
            .getMany({
              fields: ['dvhcs'],
              join: [{ field: 'dvhcs', select: ['maQuanHuyen'] }],
              filter: [
                { field: 'applicationId', operator: '$eq', value: appId },
                {
                  field: 'userId',
                  operator: '$eq',
                  value: this.authService.getInfo().userId,
                },
              ],
              limit: 1,
            })
            .pipe(
              first(),
              mergeMap(([value]) => {
                if (value && value.dvhcs) {
                  if (value.dvhcs.length) {
                    const maQuanHuyens = value.dvhcs.map((m) => m.maQuanHuyen);
                    const mqhString = maQuanHuyens.join(',');
                    const params = new HttpParams({
                      fromString: request.params.toString(),
                    }).append(
                      'filter',
                      `diaChi.maQuanHuyen||$in||${mqhString}`
                    );
                    request = request.clone({ params });
                  } else {
                    this.toast.warning(
                      'Tài khoản chưa được phân quyền đơn vị hành chính, vui lòng liên hệ với quản trị viên',
                      'Thông báo',
                      { duration: 5000 }
                    );
                    return of(
                      new HttpResponse({
                        status: 400,
                        body: [],
                      })
                    );
                  }
                }
                return next.handle(request);
              })
            );
        }
      }
    }
    return next.handle(request);
  }

  getSnapshot(route: ActivatedRoute): ActivatedRouteSnapshot {
    if (route.firstChild) {
      return this.getSnapshot(route.firstChild);
    }
    return route.snapshot;
  }
}
