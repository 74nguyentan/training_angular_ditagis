import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { DiaChiEntity } from '@shared/interfaces/dia-chi.interface';
import { ChiTietDonViThietKeCongTrinhEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/chi-tiet-don-vi-tkct.interface';
import { DinhKemCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/dinh-kem-cpxd.interface';
import { ChungChiDonViXayDungEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/don-vi-nganh-xay-dung/chung-chi-dvxd.interface';
import { DonViNganhXayDungEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/don-vi-nganh-xay-dung/don-vi-nganh-xd.interface';
import { LichSuTienDoCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/lich-su-tien-do-cpxd.interface';
import { LoaiCongTrinhLoaiDinhKemEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/loai-ct-loai-dinh-kem.interface';
import { CongTrinhCaiTaoSuaChuaEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/noi-dung/con-trinh-cai-tao-sua-chua.interface';
import { CongTrinhDiDoiEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/noi-dung/cong-trinh-di-doi.interface';
import { CongTrinhQuangCaoEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/noi-dung/cong-trinh-quang-cao.interface';
import { CongTrinhTuongDaiTranhHoanhTrangEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/noi-dung/cong-trinh-tuong-dai-ht.interface';
import { NoiDungDeNghiCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/noi-dung/noi-dung-de-nghi-cp.interface';
import { ThongTinCongTrinhCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/thong-tin-cong-trinh-cpxd.interface';
import { TienDoCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/tien-do-cong-trinh-xay-dung.interface';
import { VaiTroDonViNganhXDEntity } from '@shared/services/cong-trinh-xay-dung/don-vi/don-vi-nganh-xay-dung.interface';
import { UserEntity } from 'ditagis-auth';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { CongTrinhXayDungEntity } from './cong-trinh-xd/cong-trinh-xay-dung.interface';
import { XuatDonDeNghiCPXDService } from './xuat-don-de-nghi.service';

@Injectable({ providedIn: 'root' })
export class LichSuTienDoCPXDService extends CrudBaseService<LichSuTienDoCPXDEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/cpxd/lich-su-tien-do' },
      http
    );
  }
}

@Injectable({ providedIn: 'root' })
export class TienDoCPXDService extends CrudBaseService<TienDoCPXDEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/cpxd/tien-do' }, http);
  }
}
@Injectable({ providedIn: 'root' })
export class VaiTroDonViNganhXDService extends CrudBaseService<VaiTroDonViNganhXDEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/dvnxd/vai-tro' }, http);
  }
}
@Injectable({ providedIn: 'root' })
export class ThongTinCongTrinhCPXDService extends CrudBaseService<
  Partial<ThongTinCongTrinhCPXDEntity>
> {
  constructor(http: HttpClient, private service: XuatDonDeNghiCPXDService) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/cpxd/thong-tin' }, http);
  }
  chuyenCTXD(maCTXD: string) {
    return this.http.post<CongTrinhXayDungEntity>(
      this.getBaseUrl() + '/chuyenCTXD/' + maCTXD,
      null
    );
  }
  getUsers() {
    return this.http.get<UserEntity[]>(this.getBaseUrl() + '/users');
  }

  traHoSo(params: { id: string; lyDo: string; file }) {
    const { id, lyDo, file } = params;
    const form = new FormData();
    form.set('file', file);
    form.set('lyDo', lyDo);
    return this.http.post<LichSuTienDoCPXDEntity>(
      `${this.getBaseUrl()}/traHoSo/${id}`,
      form
    );
  }

  baoTroNgai(params: {
    maCTCPXD: string;
    noiDungTroNgai: string;
    tienDoQuayVe?: string;
    maTienDoHienTai: string;
  }) {
    return this.http.post<LichSuTienDoCPXDEntity>(
      `${this.getBaseUrl()}/baoTroNgai/${params.maCTCPXD}`,
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
  hoanTraTroNgai(params: { maCTCPXD: string }) {
    return this.http.post<LichSuTienDoCPXDEntity>(
      `${this.getBaseUrl()}/hoanTraTroNgai/${params.maCTCPXD}`,
      null
    );
  }

  xuatPhieuTroNgai(params: { tenChuDauTu: string; lyDo: string }) {
    this.service.exportDocx({
      filename: 'dontrongai.docx',
      method: 'GET',
      endpoint:
        environment.apiUrl +
        `/cpxd/bao-cao/don-tro-ngai?lyDo=${params.lyDo}&tenChuDauTu=${params.tenChuDauTu}`,
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
@Injectable({ providedIn: 'root' })
export class DonViNganhXayDungService extends CrudBaseService<DonViNganhXayDungEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/dvnxd/don-vi' }, http);
  }
}
@Injectable({ providedIn: 'root' })
export class ChungChiDonViXayDungService extends CrudBaseService<ChungChiDonViXayDungEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/dvnxd/chung-chi' }, http);
  }
}
@Injectable({ providedIn: 'root' })
export class ChiTietDonViThietKeCongTrinhService extends CrudBaseService<ChiTietDonViThietKeCongTrinhEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/cpxd/chi-tiet-dv' },
      http
    );
  }
}
@Injectable({ providedIn: 'root' })
export class NoiDungDeNghiCPXDService extends CrudBaseService<NoiDungDeNghiCPXDEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/cpxd/noi-dung' }, http);
  }
  uploads(maCPXD: string, maLoaiDinhKem: string, file: File) {
    const url = `${this.getBaseUrl()}/dinhKem`;
    const form = new FormData();
    form.set('file', file);
    form.set('maCPXD', `${maCPXD}`);
    form.set('maLoaiDinhKem', `${maLoaiDinhKem}`);
    return this.http.post<DinhKemCPXDEntity>(url, form);
  }
}
@Injectable({ providedIn: 'root' })
export class DinhKemCPXDService extends CrudBaseService<DinhKemCPXDEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/cpxd/dinh-kem' }, http);
  }
}

@Injectable({ providedIn: 'root' })
export class CongTrinhCaiTaoSuaChuaService extends CrudBaseService<CongTrinhCaiTaoSuaChuaEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/cpxd/cong-trinh-cai-tao-sua-chua',
      },
      http
    );
  }
}
@Injectable({ providedIn: 'root' })
export class CongTrinhDiDoiService extends CrudBaseService<CongTrinhDiDoiEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/cpxd/cong-trinh-di-doi' },
      http
    );
  }
}

@Injectable({ providedIn: 'root' })
export class CongTrinhQuangCaoService extends CrudBaseService<CongTrinhQuangCaoEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/cpxd/quang-cao' }, http);
  }
}
@Injectable({ providedIn: 'root' })
export class CongTrinhTuongDaiTranhHoanhTrangService extends CrudBaseService<CongTrinhTuongDaiTranhHoanhTrangEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/cpxd/cong-trinh-tuong-dai-hoanh-trang',
      },
      http
    );
  }
}
@Injectable({ providedIn: 'root' })
export class LoaiCongTrinhLoaiDinhKemService extends CrudBaseService<LoaiCongTrinhLoaiDinhKemEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/cpxd/loai-ct-loai-dinh-kem' },
      http
    );
  }
}

@Injectable({ providedIn: 'root' })
export class DiaChiBanDoService extends CrudBaseService<ThongTinCongTrinhCPXDEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'services/geometry/places' },
      http
    );
  }

  findAddress(params: { q: string }) {
    return this.http.get<{ x: number; y: number }>(
      `${this.getBaseUrl()}/findPointAddress?q=${encodeURI(params.q)}`
    );
  }
}
