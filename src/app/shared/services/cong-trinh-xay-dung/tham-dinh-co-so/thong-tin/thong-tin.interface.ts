import { ChuDauTuEntity } from '@shared/interfaces/chu-dau-tu.interface';
import { DiaChiEntity } from '@shared/interfaces/dia-chi.interface';
import { LoaiCongTrinhCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/loai-cong-trinh/loai-cong-trinh.interface';
import { LoaiVonCongTrinhCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/loai-von-cong-trinh.interface';
import { CapCongTrinhEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.interface';
import { CongTrinhXayDungEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/cong-trinh-xay-dung.interface';
import { ChiTietDonViThietKeCongTrinhTDCSEntity } from '../chi-tiet-dv/chi-tiet-dv.interface';
import { ChiTieuThietKeTDCSEntity } from '../chi-tieu-thiet-ke/chi-tieu-thiet-ke.interface';
import { DinhKemTDCSEntity } from '../dinh-kem/dinh-kem.interface';
import { HoatDongTDCSEntity } from '../hoat-dong/hoat-dong.interface';
import { LichSuTienDoTDCSEntity } from '../lich-su-tien-do/lich-su-tien-do.interface';
import { LoaiHinhCongViecThamDinhEntity } from '../loai-hinh-cong-viec/loai-hinh-cong-viec.interface';
import { LoaiThamDinhTDCSEntity } from '../loai-tham-dinh/loai-tham-dinh.interface';
import { ThoiGianHetHanTDCSEntity } from '../thoi-gian-het-han/thoi-gian-het-han.interface';
import { TienDoTDCSEntity } from '../tien-do/tien-do.interface';
import { TinhTrangChuyenModuleTDCSEntity } from '../tinh-trang-chuyen-module/tinh-trang-chuyen-module.interface';
import { TinhTrangTraHoSoTDCSEntity } from '../tinh-trang-tra-ho-so/tinh-trang-tra-ho-so.interface';
import { VanBanTDCSEntity } from '../van-ban/van-ban.interface';

export interface ThongTinCongTrinhTDCSEntity {
  maCTTDCS: string;
  maCTXD: string;
  maCTCha?: string;
  congTrinhCha?: ThongTinCongTrinhTDCSEntity;
  tinhTrangTraHoSo: TinhTrangTraHoSoTDCSEntity;
  congTrinhXayDung: Partial<CongTrinhXayDungEntity>;
  maHoSo: string;
  tinhTrangChuyenModule: TinhTrangChuyenModuleTDCSEntity;
  chiTieuThietKe: ChiTieuThietKeTDCSEntity;
  diaChi: DiaChiEntity;
  dienTich: number;
  tenCongTrinh: string;
  maTienDo: string;
  tienDo: TienDoTDCSEntity;
  soTo: string;
  soThua: string;
  maChuDauTu: string;
  chuDauTu: ChuDauTuEntity;
  maVonCongTrinh: number;
  vonCongTrinh: LoaiVonCongTrinhCPXDEntity;
  maLoaiCongTrinh: number;
  loaiCongTrinh: LoaiCongTrinhCPXDEntity;
  maCapCongTrinh: string;
  capCongTrinh: CapCongTrinhEntity;
  nguoiQDDauTu: string;
  giaTriTongMucDauTu: string;
  tgThucHien: Date;
  tcqc: string;
  thongTinKhac: string;
  tgHetHan: ThoiGianHetHanTDCSEntity;
  dinhKems: DinhKemTDCSEntity[];
  donVis: Partial<ChiTietDonViThietKeCongTrinhTDCSEntity>[];
  lichSuTienDos: LichSuTienDoTDCSEntity[];
  hoatDongs: HoatDongTDCSEntity[];
  vanBans: VanBanTDCSEntity[];
  loaiHinhCongViecTD: LoaiHinhCongViecThamDinhEntity;
  maLoaiCTTKCS: string;
  loaiCTTKCS: string;
  maLoaiHinhCongViecTD?: number;
  maLoaiThamDinh?: string;
  loaiThamDinh: LoaiThamDinhTDCSEntity;
  shape: any;
}
