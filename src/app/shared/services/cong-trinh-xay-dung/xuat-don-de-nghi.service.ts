import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { OfficeDocumentService } from '../office-document.service';

@Injectable({ providedIn: 'root' })
export class XuatDonDeNghiCPXDService {
  constructor(private offService:OfficeDocumentService) {
  }
  xuatDonDeNghi(maCTCPXD: string) {
    const url = environment.apiUrl + `/cpxd/bao-cao/don-de-nghi-cap-phep/${maCTCPXD}`;
    return this.exportDocx({
      method: 'GET',
      endpoint: url,
      filename: `Mau Don ${maCTCPXD}.docx`,
    });
  }
  xuatGiayPhep(maCTCPXD: string) {
    const url = environment.apiUrl + `/cpxd/bao-cao/giay-phep-xay-dung/${maCTCPXD}`;
    return this.exportDocx({
      method: 'GET',
      endpoint: url,
      filename: `Giayphep ${maCTCPXD}.docx`,
    });
  }

  async exportDocx(param: {
    method: 'GET' | 'POST';
    endpoint: string;
    body?: BodyInit;
    filename?: string;
  }): Promise<boolean> {
   return this.offService.exportDocx(param);
  }
}
