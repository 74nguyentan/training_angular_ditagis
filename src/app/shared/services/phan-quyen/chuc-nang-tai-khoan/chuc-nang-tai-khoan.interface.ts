import { UserEntity } from 'ditagis-auth';
import { ChucNangEntity } from '../chuc-nang.interface';

export interface ChucNangNguoiDungEntity {
  id?: string;
  applicationId?: string;
  application?: ChucNangEntity;
  userId?: string;
  user?: UserEntity;
  dvhcs?: ChucNangNguoiDungDVHCEntity[];
}
export interface ChucNangNguoiDungDVHCEntity {
  id?: string;
  idCNND?: string;
  chucNangNguoiDung?: ChucNangNguoiDungEntity;
  maQuanHuyen?: string;
}
