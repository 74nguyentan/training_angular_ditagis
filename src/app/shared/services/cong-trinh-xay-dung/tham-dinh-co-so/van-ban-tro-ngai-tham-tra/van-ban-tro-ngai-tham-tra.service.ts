import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { OfficeDocumentService } from '@shared/services/office-document.service';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { VanBanTroNgaiThamTraTDCSEntity } from './van-ban-tro-ngai-tham-tra.interface';

@Injectable({ providedIn: 'root' })
export class VanBanTroNgaiThamTraTDCSService extends CrudBaseService<
  Partial<VanBanTroNgaiThamTraTDCSEntity>
> {
  constructor(http: HttpClient, private offService: OfficeDocumentService) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/tdcs/van-ban-tro-ngai-tham-tra',
      },
      http
    );
  }

  dinhKem(params: { id: string; file }) {
    const { id, file } = params;
    const form = new FormData();
    form.set('file', file);
    return this.http.post<VanBanTroNgaiThamTraTDCSEntity>(
      `${this.getBaseUrl()}/dinhKem/${id}`,
      form
    );
  }

  xuatDon(params: { id: string }) {
    const { id } = params;
    return this.offService.exportDocx({
      filename: 'vanbantrongaithamtra.docx',
      method: 'GET',
      endpoint: this.getBaseUrl() + `/xuatdon/${id}`,
    });
  }
}
