import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { LoaiThamDinhTDCSEntity } from './loai-tham-dinh.interface';

@Injectable({ providedIn: 'root' })
export class LoaiThamDinhTDCSService extends CrudBaseService<LoaiThamDinhTDCSEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/tdcs/loai-tham-dinh' },
      http
    );
  }
}
