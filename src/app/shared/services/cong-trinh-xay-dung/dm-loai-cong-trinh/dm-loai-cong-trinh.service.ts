import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { DMLoaiCongTrinhEntity } from './dm-loai-cong-trinh.interface';

@Injectable({ providedIn: 'root' })
export class DMLoaiCongTrinhService extends CrudBaseService<DMLoaiCongTrinhEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/ctxd/loai-cong-trinh' },
      http
    );
  }
}
