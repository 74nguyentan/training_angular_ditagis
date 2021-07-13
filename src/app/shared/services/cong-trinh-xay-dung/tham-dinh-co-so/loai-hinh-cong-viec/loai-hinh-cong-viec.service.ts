import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { LoaiHinhCongViecThamDinhEntity } from './loai-hinh-cong-viec.interface';

@Injectable({ providedIn: 'root' })
export class LoaiHinhCongViecThamDinhService extends CrudBaseService<LoaiHinhCongViecThamDinhEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/ctxd/loai-hinh-cong-viec-tham-dinh',
      },
      http
    );
  }
}
