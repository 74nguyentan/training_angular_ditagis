import { PhuongXaEntity, QuanHuyenEntity, TinhTPEntity } from '../interfaces/hanh-chinh/hanh-chinh-huyen.interface';
import { Injectable } from '@angular/core';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuanHuyenService extends CrudBaseService<QuanHuyenEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/hanh-chinh-huyen'
      }, http);
    }
  }

  @Injectable({
    providedIn: 'root',
  })
  export class PhuongXaService extends CrudBaseService<PhuongXaEntity> {
    constructor(http: HttpClient) {
      super(
        {
          apiUrl: environment.apiUrl,
          entity: 'rest/ranh-gioi-hanh-chinh',
        },
        http
      );
    }
  }
  @Injectable({
    providedIn: 'root',
  })
  export class TinhTPService extends CrudBaseService<TinhTPEntity> {
    constructor(http: HttpClient) {
      super(
        {
          apiUrl: environment.apiUrl,
          entity: 'rest/hanh-chinh-tinh',
        },
        http
      );
    }
  }
