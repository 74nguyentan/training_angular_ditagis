import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { LoaiVanBanCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/van-ban-cpxd.interface';
import { CrudBaseService } from 'nest-crud-typeorm-client';

@Injectable({ providedIn: 'root' })
export class LoaiVanBanCPXDService extends CrudBaseService<LoaiVanBanCPXDEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/cpxd/van-ban/loai' },
      http
    );
  }
}
