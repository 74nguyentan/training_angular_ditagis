import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChungChiDonViXayDungEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/don-vi-nganh-xay-dung/chung-chi-dvxd.interface';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { environment } from '../../../../environments/environment';
import {
  ChiTietDonViCongTrinhEntity,
  DonViNganhXDEntity,
  VaiTroDonViNganhXDEntity,
} from '../cong-trinh-xay-dung/don-vi/don-vi-nganh-xay-dung.interface';

@Injectable({ providedIn: 'root' })
export class ChiTietDonViCongTrinhService extends CrudBaseService<ChiTietDonViCongTrinhEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/ctxd/chi-tiet-dv' },
      http
    );
  }
}
@Injectable({ providedIn: 'root' })
export class DonViNganhXDCongTrinhService extends CrudBaseService<DonViNganhXDEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/don-vi-nganh-xd' }, http);
  }
}
@Injectable({ providedIn: 'root' })
export class VaiTroDonViNganhXDinhService extends CrudBaseService<VaiTroDonViNganhXDEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/vai-tro-dv' }, http);
  }
}

@Injectable({ providedIn: 'root' })
export class ChungChiDonViXayDungService extends CrudBaseService<ChungChiDonViXayDungEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/dvnxd/chung-chi' }, http);
  }
}
