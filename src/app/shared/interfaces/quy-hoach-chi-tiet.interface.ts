import { DoAnEntity } from './do-an.interface';
import { BatDongSanEntity } from './bat-dong-san.interface';

export interface QuyHoachChiTietEntity {
  maQHCT?: string;
  maDoAn?: string;
  doAn?: DoAnEntity;
  hinhThucDauTu?: string;
  maLoaiQHCT?: string;
  loaiQHCT?: LoaiQuyHoachChiTietEntity;
  batDongSan?: BatDongSanEntity;
}

export interface LoaiQuyHoachChiTietEntity {
  maLoaiQHCT?: string;
  tenLoaiQHCT?: string;
  stt?: number;
}
