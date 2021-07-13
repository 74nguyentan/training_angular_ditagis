import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { DMLoaiCongTrinhXayDungEntity } from './dm-loai-cong-trinh-xay-dung.interface';

@Injectable({ providedIn: 'root' })
export class LoaiCongTrinhXayDungService extends CrudBaseService<DMLoaiCongTrinhXayDungEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/ctxd/loai-cong-trinh-xay-dung',
      },
      http
    );
  }
}
