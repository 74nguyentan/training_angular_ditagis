import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { ChucNangEntity } from './chuc-nang.interface';

@Injectable({ providedIn: 'root' })
export class ChucNangService extends CrudBaseService<ChucNangEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/ctxd/phan-quyen/chuc-nang',
      },
      httpClient
    );
  }
}
