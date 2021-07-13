import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { BaoCaoService } from '../bao-cao/bao-cao.service';
import { DuThaoVanBanTDCSEntity } from './du-thao-van-ban.interface';

@Injectable({ providedIn: 'root' })
export class DuThaoVanBanTDCSService extends CrudBaseService<
  Partial<DuThaoVanBanTDCSEntity>
> {
  constructor(http: HttpClient, private baoCaoService: BaoCaoService) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/tdcs/du-thao-van-ban',
      },
      http
    );
  }

  dinhKem(params: { id: string; file }) {
    const { id, file } = params;
    const form = new FormData();
    form.set('file', file);
    return this.http.post<DuThaoVanBanTDCSEntity>(
      `${this.getBaseUrl()}/dinhKem/${id}`,
      form
    );
  }

  xuatDon(params: { id: string }) {
    const { id } = params;
    this.baoCaoService.xuatKetQuaThamDinh({ id });
  }
}
