import { VanBanEntity } from '@shared/interfaces/van-ban.interface';
import { ThongTinCongTrinhTDCSEntity } from '../thong-tin/thong-tin.interface';
import { LoaiVanBanTDCSEntity } from './loai-van-ban/loai-van-ban.interface';

export interface VanBanTDCSEntity {
  id: string;
  maCTTDCS: string;

  congTrinhTDCS: ThongTinCongTrinhTDCSEntity;
  maVanBan: string;

  vanBan: VanBanEntity;
  maLoaiVanBan: string;

  loaiVanBan: LoaiVanBanTDCSEntity;
}
