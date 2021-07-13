import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { XuatDonDeNghiCPXDService } from '../../xuat-don-de-nghi.service';
import { DuThaoVanBanCPXDEntity } from './du-thao-van-ban.interface';

@Injectable({ providedIn: 'root' })
export class DuThaoVanBanCPXDService extends CrudBaseService<
  Partial<DuThaoVanBanCPXDEntity>
> {
  constructor(
    http: HttpClient,
    private xuatDonDeNghiService: XuatDonDeNghiCPXDService
  ) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/cpxd/du-thao-van-ban',
      },
      http
    );
  }

  dinhKem(params: { id: string; file }) {
    const { id, file } = params;
    const form = new FormData();
    form.set('file', file);
    return this.http.post<DuThaoVanBanCPXDEntity>(
      `${this.getBaseUrl()}/dinhKem/${id}`,
      form
    );
  }

  xuatDon(params: { id: string }) {
    const { id } = params;
    this.xuatDonDeNghiService.xuatDonDeNghi(id);
  }
}
