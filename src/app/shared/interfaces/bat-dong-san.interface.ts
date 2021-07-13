import { QuyHoachChiTietEntity } from './quy-hoach-chi-tiet.interface';
import { UserEntity } from './user.interface';
import { DoAnEntity } from './do-an.interface';
import { DanhMucBatDongSanEntity } from './danh-muc-bds.interface';
import { PheDuyetQuyHoachEntity } from './phe-duyet-quy-hoach.interface';

export interface BatDongSanEntity {
  id?: string;
  maQHCT?: string;
  quyHoachChiTiet?: QuyHoachChiTietEntity;
  maTienDo?: TienDoDoAnEnum;
  tienDo?: TienDoDoAnEntity;
  tienDos?: LichSuTienDoDAEntity[];
  danhMucs?: BatDongSanDanhMucEntity[];
  pheDuyetQuyHoach?: PheDuyetQuyHoachEntity;
  thamDinh2Buoc?:boolean;
}

export interface TienDoDoAnEntity {
  maTienDo?: string;
  tenTienDo?: string;
  maTienQuyet?: string;
  stt?: number;
}

export enum TienDoDoAnEnum {
  ThuHoi = '0',
  DangKyChuDauTu = '1',
  PheDuyetQuyHoach = '2',
  ChapThuanChuTruong = '3',
  ThamDinhThietKeCoSo = '41',
  ThamDinhBanVeThiCong = '42',
  NghiemThu = '5',
  BatDongSan = '6',
}

export interface LichSuTienDoDAEntity {
  id?: string;
  tgCapNhat?: Date;
  tgQuyetDinh?: Date;
  nguoiCapNhat?: UserEntity;
  ghiChu?: string;
  maBDS?: string;
  doAn?: DoAnEntity;
  maTienDo?: string;
  tienDo?: TienDoDoAnEntity;
}

export interface BatDongSanDanhMucEntity {
  id?: string;
  maBDS?: string;
  batDongSan?: BatDongSanEntity;
  maDanhMuc?: string;
  danhMuc?: DanhMucBatDongSanEntity;
}
