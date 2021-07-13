import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { environment } from '../../../../../../environments/environment';
import { HoatDongCPXDEntity } from '../hoat-dong-cpxd.interface';

@Injectable({ providedIn: 'root' })
export class HoatDongCPXDService extends CrudBaseService<HoatDongCPXDEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/cpxd/hoat-dong',
      },
      httpClient
    );
  }
}
