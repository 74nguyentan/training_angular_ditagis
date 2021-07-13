import { ChuDauTuEntity } from './chu-dau-tu.interface';
import { QuyHoachChiTietEntity } from './quy-hoach-chi-tiet.interface';
export interface DoAnEntity {
  maDoAn?: string;
  tenDoAn?: string;
  viTri?: string;
  quyMoDuAn?: string;
  maChuDauTu?: string;
  chuDauTu?: ChuDauTuEntity;
  maQuanHuyen?: string;
  maPhuongXa?: string;
  maLoaiQuyHoach?: string;
  loaiQuyHoach?: LoaiQuyHoachEntity;
  tyLe?: string;
  dienTich?: number;
  quyHoachChiTiet?: QuyHoachChiTietEntity;
  shape?: __esri.Polygon;
}

export interface LoaiQuyHoachEntity {
  maLQH?: string;
  tenLQH?: string;
  stt?: number;
}
