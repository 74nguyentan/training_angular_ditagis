import { UserEntity } from '@shared/interfaces/tep-chia-se.interface';
import { ThongTinCongTrinhTDCSEntity } from '../thong-tin/thong-tin.interface';
import { TienDoTDCSEntity } from '../tien-do/tien-do.interface';

export interface LichSuTienDoTDCSEntity {
  id: string;
  maCTTDCS: string;
  congTrinhTDCS: ThongTinCongTrinhTDCSEntity;
  maTienDo: string;
  tienDo: Partial<TienDoTDCSEntity>;
  isTroNgai: boolean;
  thoiGian: Date;
  noiDungTroNgai: string;
  maNguoiCapNhat: string;
  nguoiCapNhat: UserEntity;
  maTienDoTruoc?: string;
  tienDoTruoc?: Partial<LichSuTienDoTDCSEntity>;
  duongDanVBTroNgai?:string;
}
