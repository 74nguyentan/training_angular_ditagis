import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { CongTrinhKhongTheoTuyenGiaiDoanEntity } from './ct-khong-theo-tuyen-giai-doan.interface';

@Injectable({ providedIn: 'root' })
export class CongTrinhKhongTheoTuyenGiaiDoanService extends CrudBaseService<CongTrinhKhongTheoTuyenGiaiDoanEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/cpxd/cong-trinh-khong-theo-tuyen-giai-doan',
      },
      http
    );
  }
}
