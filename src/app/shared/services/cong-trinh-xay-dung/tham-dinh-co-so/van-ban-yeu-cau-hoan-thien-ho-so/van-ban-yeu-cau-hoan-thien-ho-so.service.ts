import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { OfficeDocumentService } from '@shared/services/office-document.service';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { VanBanYeuCauHoanThienHoSoTDCSEntity } from './van-ban-yeu-cau-hoan-thien-ho-so.interface';

@Injectable({ providedIn: 'root' })
export class VanBanYeuCauHoanThienHoSoTDCSService extends CrudBaseService<
  Partial<VanBanYeuCauHoanThienHoSoTDCSEntity>
> {
  constructor(http: HttpClient, private offService: OfficeDocumentService) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/tdcs/van-ban-yeu-cau-hoan-thien-ho-so',
      },
      http
    );
  }

  dinhKem(params: { id: string; file }) {
    const { id, file } = params;
    const form = new FormData();
    form.set('file', file);
    return this.http.post<VanBanYeuCauHoanThienHoSoTDCSEntity>(
      `${this.getBaseUrl()}/dinhKem/${id}`,
      form
    );
  }

  xuatDon(params: { id: string }) {
    const { id } = params;
    return this.offService.exportDocx({
      filename: 'vanbanyeucauhoanthienhoso.docx',
      method: 'GET',
      endpoint: this.getBaseUrl() + `/xuatdon/${id}`,
    });
  }
}
