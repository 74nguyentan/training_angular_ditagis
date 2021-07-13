import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { ThongTinCongTrinhCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/thong-tin-cong-trinh-cpxd.interface';
import { CrudBaseService } from 'nest-crud-typeorm-client';

@Injectable({
  providedIn: 'root',
})
export class ThongKeService extends CrudBaseService<ThongTinCongTrinhCPXDEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'cpxd/thong-ke',
      },
      httpClient
    );
  }
  getHoSoTreHan(params: { maTienDo: string; maNhanVien?: string }) {
    return this.http.get<ThongTinCongTrinhCPXDEntity[]>(
      this.getBaseUrl() + '/ho-so-tre-han',
      {
        params: new HttpParams({
          fromObject: params,
        }),
      }
    );
  }
}
