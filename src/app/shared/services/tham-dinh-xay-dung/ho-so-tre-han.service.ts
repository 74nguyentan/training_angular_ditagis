import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { ThongTinCongTrinhTDXDEntity } from '../cong-trinh-xay-dung/tham-dinh-xay-dung/thong-tin/thong-tin.interface';

@Injectable({
  providedIn: 'root',
})
export class ThongKeTDXDService extends CrudBaseService<ThongTinCongTrinhTDXDEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'tdxd/thong-ke',
      },
      httpClient
    );
  }
  getHoSoTreHan(params: { maTienDo: string; maNhanVien?: string }) {
    return this.http.get<ThongTinCongTrinhTDXDEntity[]>(
      this.getBaseUrl() + '/ho-so-tre-han',
      {
        params: new HttpParams({
          fromObject: params,
        }),
      }
    );
  }
}
