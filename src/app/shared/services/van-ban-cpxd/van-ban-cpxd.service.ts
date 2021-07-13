import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { environment } from '../../../../environments/environment';
import { VanBanCPXDEntity } from '../cong-trinh-xay-dung/cap-phep-xay-dung/van-ban-cpxd.interface';

@Injectable({ providedIn: 'root' })
export class VanBanCPXDService extends CrudBaseService<VanBanCPXDEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/cpxd/van-ban/van-ban' },
      http
    );
  }
}
