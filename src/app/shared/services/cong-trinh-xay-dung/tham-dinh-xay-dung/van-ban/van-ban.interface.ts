import { VanBanEntity } from '@shared/interfaces/van-ban.interface';
import { ThongTinCongTrinhTDXDEntity } from '../thong-tin/thong-tin.interface';
import { LoaiVanBanTDXDEntity } from './loai-van-ban/loai-van-ban.interface';

export interface VanBanTDXDEntity {
  id: string;
  maCTTDXD: string;

  congTrinhTDXD: ThongTinCongTrinhTDXDEntity;
  maVanBan: string;

  vanBan: VanBanEntity;
  maLoaiVanBan: string;

  loaiVanBan: LoaiVanBanTDXDEntity;
}
