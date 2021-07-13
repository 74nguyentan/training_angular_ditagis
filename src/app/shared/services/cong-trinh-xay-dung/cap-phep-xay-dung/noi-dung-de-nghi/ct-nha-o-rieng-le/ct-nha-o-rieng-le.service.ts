import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { CongTrinhNhaORiengLeEntity } from './cong-trinh-nha-o-rieng-le.interface';

@Injectable({ providedIn: 'root' })
export class CongTrinhNhaORiengLeService extends CrudBaseService<
  Partial<CongTrinhNhaORiengLeEntity>
> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/cpxd/cong-trinh-nha-o-rieng-le',
      },
      http
    );
  }
}
