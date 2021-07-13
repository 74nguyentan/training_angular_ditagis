import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { OfficeDocumentService } from '@shared/services/office-document.service';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { VanBanLayYKienTDXDEntity } from './van-ban-lay-y-kien.interface';

@Injectable({ providedIn: 'root' })
export class VanBanLayYKienTDXDService extends CrudBaseService<
  Partial<VanBanLayYKienTDXDEntity>
> {
  constructor(http: HttpClient, private offService: OfficeDocumentService) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/tdxd/van-ban-lay-y-kien',
      },
      http
    );
  }

  dinhKem(params: { id: string; file }) {
    const { id, file } = params;
    const form = new FormData();
    form.set('file', file);
    return this.http.post<VanBanLayYKienTDXDEntity>(
      `${this.getBaseUrl()}/dinhKem/${id}`,
      form
    );
  }

  xuatDon(params: { id: string }) {
    const { id } = params;
    return this.offService.exportDocx({
      filename: 'vanbanlayykien.docx',
      method: 'GET',
      endpoint: this.getBaseUrl() + `/xuatdon/${id}`,
    });
  }
}
