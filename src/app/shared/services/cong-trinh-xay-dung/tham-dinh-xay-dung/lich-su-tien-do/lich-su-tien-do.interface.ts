import { UserEntity } from '@shared/interfaces/tep-chia-se.interface';
import { ThongTinCongTrinhTDXDEntity } from '../thong-tin/thong-tin.interface';
import { TienDoTDXDEntity } from '../tien-do/tien-do.interface';

export interface LichSuTienDoTDXDEntity {
  id: string;
  maCTTDXD: string;
  congTrinhTDXD: ThongTinCongTrinhTDXDEntity;
  maTienDo: string;
  duongDanVBTroNgai: string;
  tienDo: Partial<TienDoTDXDEntity>;
  isTroNgai: boolean;
  thoiGian: Date;
  noiDungTroNgai: string;

  maNguoiCapNhat: string;
  nguoiCapNhat: UserEntity;
  maTienDoTruoc?: string;
  tienDoTruoc?: Partial<LichSuTienDoTDXDEntity>;
}
