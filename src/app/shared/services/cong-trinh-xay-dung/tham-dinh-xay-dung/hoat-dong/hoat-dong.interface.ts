import { UserEntity } from '@shared/interfaces/tep-chia-se.interface';
import { ThongTinCongTrinhTDXDEntity } from '../thong-tin/thong-tin.interface';

export interface HoatDongTDXDEntity {
  id: string;
  maCTTDXD: string;
  congTrinhTDXD: ThongTinCongTrinhTDXDEntity;
  thoiGian: Date;
  noiDung: string;
  maNguoiThayDoi: string;
  nguoiThayDoi: UserEntity;
  ghiChu: string;
}
