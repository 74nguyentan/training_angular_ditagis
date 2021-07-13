import { UserEntity } from 'ditagis-auth';

export interface HoatDongCPXDEntity {
  id?: string;
  maCTCPXD?: string;
  thoiGian?: Date;
  noiDung?: string;
  nguoiThayDoi?: UserEntity;
  ghiChu?: string;
}
