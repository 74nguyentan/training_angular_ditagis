import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { environment } from '@environments/environment';
import {
  ChucNangNguoiDungDVHCEntity,
  ChucNangNguoiDungEntity,
} from './chuc-nang-tai-khoan.interface';

@Injectable({ providedIn: 'root' })
export class ChucNangTaiKhoanService extends CrudBaseService<ChucNangNguoiDungEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/ctxd/chuc-nang-nguoi-dung',
      },
      httpClient
    );
  }
}

@Injectable({ providedIn: 'root' })
export class ChucNangNguoiDungDVHCService extends CrudBaseService<ChucNangNguoiDungDVHCEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/ctxd/chuc-nang-nguoi-dung-dvhc',
      },
      httpClient
    );
  }
}
