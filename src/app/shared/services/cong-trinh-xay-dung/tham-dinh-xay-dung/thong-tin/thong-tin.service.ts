import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { DiaChiEntity } from '@shared/interfaces/dia-chi.interface';
import { OfficeDocumentService } from '@shared/services/office-document.service';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { DinhKemTDXDEntity } from '../dinh-kem/dinh-kem.interface';
import { LichSuTienDoTDXDEntity } from '../lich-su-tien-do/lich-su-tien-do.interface';
import { ThongTinCongTrinhTDXDEntity } from './thong-tin.interface';

@Injectable({ providedIn: 'root' })
export class ThongTinService extends CrudBaseService<
  Partial<ThongTinCongTrinhTDXDEntity>
> {
  constructor(http: HttpClient, private offService: OfficeDocumentService) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/tdxd/thong-tin' }, http);
  }

  chuyenCTXD(maCTXD: string) {
    return this.http.post<ThongTinCongTrinhTDXDEntity>(
      this.getBaseUrl() + '/chuyenCTXD/' + maCTXD,
      null
    );
  }
  uploads(maCPXD: string, maLoaiDinhKem: string, file: File) {
    const url = `${this.getBaseUrl()}/dinhKem`;
    const form = new FormData();
    form.set('file', file);
    form.set('maCPXD', `${maCPXD}`);
    form.set('maLoaiDinhKem', `${maLoaiDinhKem}`);
    return this.http.post<DinhKemTDXDEntity>(url, form);
  }
  traHoSo(params: { id: string; lyDo: string; file }) {
    const { id, lyDo, file } = params;
    const form = new FormData();
    form.set('file', file);
    form.set('lyDo', lyDo);
    return this.http.post<LichSuTienDoTDXDEntity>(
      `${this.getBaseUrl()}/traHoSo/${id}`,
      form
    );
  }
  baoTroNgai(params: {
    maCTTDXD: string;
    noiDungTroNgai: string;
    tienDoQuayVe?: string;
    maTienDoHienTai: string;
  }) {
    return this.http.post<LichSuTienDoTDXDEntity>(
      `${this.getBaseUrl()}/baoTroNgai/${params.maCTTDXD}`,
      JSON.stringify({
        noiDungTroNgai: params.noiDungTroNgai,
        tienDoQuayVe: params.tienDoQuayVe,
        maTienDoHienTai: params.maTienDoHienTai,
      }),
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  }
  hoanTraTroNgai(params: { maCTTDXD: string }) {
    return this.http.post<LichSuTienDoTDXDEntity>(
      `${this.getBaseUrl()}/hoanTraTroNgai/${params.maCTTDXD}`,
      null
    );
  }

  xuatPhieuTroNgai(params: { tenChuDauTu: string; lyDo: string }) {
    this.offService.exportDocx({
      filename: 'dontrongai.docx',
      method: 'GET',
      endpoint:
        environment.apiUrl +
        `/cpxd/bao-cao/don-tro-ngai?lyDo=${params.lyDo}&tenChuDauTu=${params.tenChuDauTu}`,
    });
  }

  xuatPhiThamDinh(params: { id: string }) {
    return this.offService.exportDocx({
      filename: 'phiThamDinh.xlsx',
      method: 'GET',
      endpoint:
        environment.apiUrl +
        `/tham-dinh-ky-thuat/bao-cao/phithamdinh/${params.id}`,
    });
  }
  tiepNhanHoSo1Cua(params: { file }) {
    const { file } = params;
    const form = new FormData();
    form.set('file', file);
    return this.http.post<{
      maHoSo: string;
      diaChi: DiaChiEntity;
      tenChuDauTu: string;
    }>(`${environment.apiUrl}/tdcs/doc-file-1-cua/excel`, form);
  }
}
