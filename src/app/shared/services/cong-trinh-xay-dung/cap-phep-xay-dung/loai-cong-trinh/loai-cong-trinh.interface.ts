export interface LoaiCongTrinhCPXDEntity {
  maLoai?: number;
  tenLoai?: string;
  stt?: number;
}
export enum LoaiCongTrinhCPXDEnum {
  CongTrinhKhongTheoTuyenTrongDoThi = 1,
  CongTrinhTheoTuyenTrongDoThi = 2,
  CongTrinhTuongDai = 3,
  CongTrinhQuangCao = 4,
  CongTrinhNhaORiengLe = 5,
  CaiTao = 6,
  CapGiaiDoanCongTrinhKhongTheoTuyen = 7,
  CapGiaiDoanCongTrinhTheoTuyen = 8,
  CapChoDuAn = 9,
  DiDoiCongTrinh = 10,
  CongTrinhNgam,
}
