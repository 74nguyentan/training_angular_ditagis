export interface QuanHuyenEntity {
  maQuanHuyen?: string;
  tenQuanHuyen?: string;
  loaiDoThi?: number;
  phuongXas?: PhuongXaEntity[];
  stt?: number;
}
export interface PhuongXaEntity {
  maPhuongXa?: string;
  tenPhuongXa?: string;
  maQuanHuyen?: string;
  stt?: number;
}

export interface TinhTPEntity {
  maTinhTP?: string;
  tenTinhTP?: string;
  quanHuyens?: QuanHuyenEntity[];
}
