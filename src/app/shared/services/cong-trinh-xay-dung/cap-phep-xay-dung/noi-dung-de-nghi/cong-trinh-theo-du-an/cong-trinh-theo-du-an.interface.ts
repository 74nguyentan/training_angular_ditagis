import { ThongSoCongTrinhEntity } from '@shared/services/cong-trinh-xay-dung/thong-so-cong-trinh/thong-so-cong-trinh.interface';
import { NoiDungDeNghiCPXDEntity } from '../../noi-dung/noi-dung-de-nghi-cp.interface';
import { ChiTietCongTrinhTheoDuAnEntity } from './chi-tiet-ct-theo-du-an.interface';

export interface CongTrinhTheoDuAnEntity {
  id: string;
  maCPXD?: string;
  congTrinhCapPhep?: NoiDungDeNghiCPXDEntity;
  maCTTDA?: string;
  maDuAn?: string;
  congTrinhs: Partial<ChiTietCongTrinhTheoDuAnEntity>[];
  soLuong: number;
  matDoXayDung: Partial<ThongSoCongTrinhEntity>;
  heSoSuDungDat: Partial<ThongSoCongTrinhEntity>;
  chiGioiDuongDo: Partial<ThongSoCongTrinhEntity>;
  chiGioiXayDung: Partial<ThongSoCongTrinhEntity>;
  isCongTrinhHTKT: boolean;
}
