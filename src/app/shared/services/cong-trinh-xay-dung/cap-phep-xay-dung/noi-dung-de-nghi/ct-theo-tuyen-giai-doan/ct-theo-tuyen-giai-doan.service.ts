import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { CongTrinhTheoTuyenGiaiDoanEntity } from './ct-theo-tuyen-giai-doan.interface';

@Injectable({ providedIn: 'root' })
export class CongTrinhTheoTuyenGiaiDoanService extends CrudBaseService<CongTrinhTheoTuyenGiaiDoanEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/cpxd/cong-trinh-theo-tuyen-giai-doan',
      },
      http
    );
  }
}
