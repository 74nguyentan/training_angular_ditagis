import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { CongTrinhTheoTuyenTrongDoThiEntity } from './cong-trinh-theo-tuyen.interface';

@Injectable({ providedIn: 'root' })
export class CongTrinhTheoTuyenTrongDoThiService extends CrudBaseService<
  Partial<CongTrinhTheoTuyenTrongDoThiEntity>
> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/cpxd/cong-trinh-theo-tuyen' },
      http
    );
  }
}
