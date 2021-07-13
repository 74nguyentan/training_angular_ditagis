import { CapCongTrinhEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.interface';
import { ThongSoCongTrinhEntity } from '@shared/services/cong-trinh-xay-dung/thong-so-cong-trinh/thong-so-cong-trinh.interface';
import { LoaiCongTrinhCPXDEntity } from '../../loai-cong-trinh/loai-cong-trinh.interface';
import { NoiDungDeNghiCPXDEntity } from '../../noi-dung/noi-dung-de-nghi-cp.interface';
import { ChiTietCongTrinhKhongTheoTuyenGiaiDoanEntity } from './chi-tiet/chi-tiet.interface';

export interface CongTrinhKhongTheoTuyenGiaiDoanEntity {
  id: string;
  maCPXD: string;
  congTrinhCapPhep: NoiDungDeNghiCPXDEntity;
  maLoaiCongTrinh: number;

  loaiCongTrinh: LoaiCongTrinhCPXDEntity;
  maCapCongTrinh: number;

  capCongTrinh: CapCongTrinhEntity;

  cotXayDung: Partial<ThongSoCongTrinhEntity>;

  chieuSauCongTrinh: Partial<ThongSoCongTrinhEntity>;

  matDoXayDung: Partial<ThongSoCongTrinhEntity>;
  heSoSDD: Partial<ThongSoCongTrinhEntity>;
  chiGioiDuongDo: number;

  chiGioiXayDung?: number;

  dienTichXayDung: number;

  giaiDoans: Partial<ChiTietCongTrinhKhongTheoTuyenGiaiDoanEntity>[];
}
