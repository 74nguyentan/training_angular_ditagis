import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { LoaiCongTrinhCPXDEntity } from './loai-cong-trinh.interface';

@Injectable({ providedIn: 'root' })
export class LoaiCongTrinhCPXDService extends CrudBaseService<LoaiCongTrinhCPXDEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/cpxd/loai' }, http);
  }
}
