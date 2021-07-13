import {
  PhuongXaEntity,
  QuanHuyenEntity,
  TinhTPEntity,
} from './hanh-chinh/hanh-chinh-huyen.interface';

export interface DiaChiEntity {
  id?: string;
  maTinhTP?: string;
  tinhTP?: TinhTPEntity;
  maQuanHuyen?: string;
  quanHuyen?: QuanHuyenEntity;
  maPhuongXa?: string;
  phuongXa?: PhuongXaEntity;
  chiTiet?: string;
}
export enum MaHanhChinhEnum {
  MaTinhTP = 'maTinhTP',
  MaQuanHuyen = 'maQuanHuyen',
  MaPhuongXa = 'maPhuongXa',
  ChiTiet = 'chiTiet',
}
