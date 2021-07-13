import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { ThongTinCongTrinhTDCSEntity } from '../thong-tin/thong-tin.interface';

@Injectable({
  providedIn: 'root',
})
export class ThongKeService extends CrudBaseService<ThongTinCongTrinhTDCSEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'tdcs/thong-ke',
      },
      httpClient
    );
  }
  getHoSoTreHan(params: { maTienDo: string; maNhanVien?: string }) {
    return this.http.get<ThongTinCongTrinhTDCSEntity[]>(
      this.getBaseUrl() + '/ho-so-tre-han',
      {
        params: new HttpParams({
          fromObject: params,
        }),
      }
    );
  }
}
