import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { TGHetHanTienDoCPXDEntity } from './thoi-gian-tien-do.interface';

@Injectable({ providedIn: 'root' })
export class ThoiGianTienDoService extends CrudBaseService<TGHetHanTienDoCPXDEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/cpxd/thoi-gian-tien-do' },
      http
    );
  }
}
