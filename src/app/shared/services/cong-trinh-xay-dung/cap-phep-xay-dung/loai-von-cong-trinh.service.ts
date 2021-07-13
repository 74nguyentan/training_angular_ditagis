import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { LoaiVonCongTrinhCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/loai-von-cong-trinh.interface';
import { CrudBaseService } from 'nest-crud-typeorm-client';

@Injectable({
  providedIn: 'root',
})
export class LoaiVonCongTrinhService extends CrudBaseService<LoaiVonCongTrinhCPXDEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/cpxd/loai-von-cong-trinh',
      },
      httpClient
    );
  }
}
