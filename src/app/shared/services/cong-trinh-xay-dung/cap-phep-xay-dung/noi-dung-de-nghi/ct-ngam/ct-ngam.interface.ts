import { NoiDungDeNghiCPXDEntity } from '../../noi-dung/noi-dung-de-nghi-cp.interface';

export interface CongTrinhCPXDNgamEntity {
  id: string;
  maCPXD: string;
  congTrinhCapPhep: NoiDungDeNghiCPXDEntity;

  diemDauCongTrinh?: string;
  diemCuoiCongTrinh?: string;
  quyMoCongTrinh?: string;
  tongChieuDai?: number;
  chieuRongCongTrinhTu?: number;
  chieuRongCongTrinhDen?: number;
  chieuSauCongTrinhTu?: number;
  chieuSauCongTrinhDen?: number;

  khoangCachLanCan?: number;
}
