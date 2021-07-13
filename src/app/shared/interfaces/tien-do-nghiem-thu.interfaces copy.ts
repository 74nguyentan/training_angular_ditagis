import {
  BatDongSanEntity,
} from './bat-dong-san.interface';
import { UserEntity } from 'ditagis-auth';

export class TienDoNghiemThuEntity {
  id?: string;
  maBDS?: string;
  batDongSan?: BatDongSanEntity;
  tgCapNhat?: Date;
  nguoiCapNhat?: UserEntity;
  isCongTrinh?: boolean;
  isHTKT?: boolean;
}

