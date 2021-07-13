import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { CongTrinhTheoDuAnEntity } from './cong-trinh-theo-du-an.interface';

@Injectable({ providedIn: 'root' })
export class CongTrinhTheoDuAnService extends CrudBaseService<CongTrinhTheoDuAnEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/cpxd/cong-trinh-theo-du-an',
      },
      http
    );
  }
}
