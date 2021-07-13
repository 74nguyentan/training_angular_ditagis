export interface DanhMucBatDongSanEntity {
  maDanhMuc?: string;
  tenDanhMuc?: string;
  maDanhMucCha?: string;
  danhMucCha?: DanhMucBatDongSanEntity;
  danhMucCons?: DanhMucBatDongSanEntity[];
  stt?: number;
}
