import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { CongTrinhKhongTheoTuyenEntity } from './cong-trinh-khong-theo-tuyen.interface';

@Injectable({ providedIn: 'root' })
export class CongTrinhKhongTheoTuyenService extends CrudBaseService<CongTrinhKhongTheoTuyenEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/cpxd/cong-trinh-khong-theo-tuyen',
      },
      http
    );
  }
}
