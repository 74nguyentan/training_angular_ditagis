import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { OfficeDocumentService } from '@shared/services/office-document.service';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { VanBanYeuCauHoanThienHoSoTDXDEntity } from './van-ban-yeu-cau-hoan-thien-ho-so.interface';

@Injectable({ providedIn: 'root' })
export class VanBanYeuCauHoanThienHoSoTDXDService extends CrudBaseService<
  Partial<VanBanYeuCauHoanThienHoSoTDXDEntity>
> {
  constructor(http: HttpClient, private offService: OfficeDocumentService) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/tdxd/van-ban-yeu-cau-hoan-thien-ho-so',
      },
      http
    );
  }

  dinhKem(params: { id: string; file }) {
    const { id, file } = params;
    const form = new FormData();
    form.set('file', file);
    return this.http.post<VanBanYeuCauHoanThienHoSoTDXDEntity>(
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
