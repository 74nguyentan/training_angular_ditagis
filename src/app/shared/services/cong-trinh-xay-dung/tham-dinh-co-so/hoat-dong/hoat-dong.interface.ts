import { UserEntity } from '@shared/interfaces/tep-chia-se.interface';
import { ThongTinCongTrinhTDCSEntity } from '../thong-tin/thong-tin.interface';

export interface HoatDongTDCSEntity {
  id: string;
  maCTTDCS: string;
  congTrinhTDCS: ThongTinCongTrinhTDCSEntity;
  thoiGian: Date;
  noiDung: string;
  maNguoiThayDoi: string;
  nguoiThayDoi: UserEntity;
  ghiChu: string;
}
