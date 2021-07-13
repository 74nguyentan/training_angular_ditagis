import { VanBanEntity } from '@shared/interfaces/van-ban.interface';
import { CongTrinhXayDungEntity } from './cong-trinh-xay-dung.interface';
import { LoaiVanBanCTXDEntity } from './loai-van-ban-ctxd.interface';

export interface VanBanCTXDEntity {
  id?: string;
  maCTXD?: string;
  congTrinhXayDung?: CongTrinhXayDungEntity;
  maVanBan?: string;
  vanBan?: VanBanEntity;
  maLoaiVanBan?: string;
  loaiVanBan?: LoaiVanBanCTXDEntity;
}
