import { VanBanEntity } from '@shared/interfaces/van-ban.interface';
import { ThongTinCongTrinhCPXDEntity } from './thong-tin-cong-trinh-cpxd.interface';

export interface VanBanCPXDEntity {
  id?: string;
  maCTCPXD?: string;
  congTrinhCPXD?: ThongTinCongTrinhCPXDEntity;
  maVanBan?: string;
  vanBan?: VanBanEntity;
  maLoaiVanBan?: string;
  loaiVanBan?: LoaiVanBanCPXDEntity;
}
export interface LoaiVanBanCPXDEntity {
  maLoaiVanBan?: string;
  tenLoaiVanBan?: string;
  stt?: number;
}
