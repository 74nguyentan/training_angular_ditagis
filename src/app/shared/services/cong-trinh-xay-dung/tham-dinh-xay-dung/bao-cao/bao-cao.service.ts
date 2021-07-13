import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { OfficeDocumentService } from '@shared/services/office-document.service';

@Injectable({
  providedIn: 'root',
})
export class BaoCaoService {
  constructor(private offService: OfficeDocumentService) {}
  xuatKetQuaThamDinh(params: { id: string }) {
    return this.offService.exportDocx({
      method: 'GET',
      filename: 'ket-qua-tham-dinh.docx',
      endpoint: environment.apiUrl + `/tham-dinh-ky-thuat/bao-cao/ketQuaThamDinh/${params.id}`,
    });
  }
}
