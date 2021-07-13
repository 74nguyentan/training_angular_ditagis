import { DoAnEntity } from './do-an.interface';
import { UserEntity } from './user.interface';

export interface HoatDongDoAnEntity {
  id: string;
  maDoAn: string;
  doAn: DoAnEntity;
  thoiGian: Date;
  noiDung: string;
  ghiChu: string;
  nguoiThayDoi: UserEntity;
}
