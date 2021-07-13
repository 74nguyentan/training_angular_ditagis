import {
  BatDongSanEntity,
} from './bat-dong-san.interface';
import { UserEntity } from 'ditagis-auth';

export class PheDuyetQuyHoachEntity {
  maPDQH?: string;
  maBDS?: string;
  batDongSan?: BatDongSanEntity;
  tgCapNhat?: Date;
  nguoiCapNhat?: UserEntity;
  isLayYKien?: boolean;
  isCongBo?: boolean;
}

