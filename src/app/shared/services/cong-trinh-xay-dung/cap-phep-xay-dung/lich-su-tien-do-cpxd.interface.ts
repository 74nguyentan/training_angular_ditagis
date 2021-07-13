import { UserEntity } from 'ditagis-auth';
import { TienDoCPXDEntity } from './tien-do-cong-trinh-xay-dung.interface';

export interface LichSuTienDoCPXDEntity {
  id?: string;
  maCTCPXD?: string;
  maTienDo?: string;
  tienDo?: TienDoCPXDEntity;
  thoiGian?: Date;
  noiDung?: string;
  maNguoiCapNhat?: string;
  nguoiCapNhat?: UserEntity;
  isTroNgai?: boolean;
  noiDungTroNgai?: string;
  maTienDoTruoc?: string;
  tienDoTruoc?: LichSuTienDoCPXDEntity;
  duongDanVBTroNgai?: string;
}
