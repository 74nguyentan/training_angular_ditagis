import { DiaChiEntity } from './dia-chi.interface';

export interface ChuDauTuEntity {
  maChuDauTu?: string;
  tenChuDauTu?: string;
  nguoiDaiDien?: string;
  chucVu?: string;
  diaChiLienHe?: DiaChiEntity;
  soDienThoai?: string;
}
