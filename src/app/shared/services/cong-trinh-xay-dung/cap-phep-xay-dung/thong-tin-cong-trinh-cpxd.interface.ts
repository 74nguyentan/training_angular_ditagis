import { ChuDauTuEntity } from '@shared/interfaces/chu-dau-tu.interface';
import { DiaChiEntity } from '@shared/interfaces/dia-chi.interface';
import { Polygon } from 'geojson';
import { ChiTietDonViThietKeCongTrinhEntity } from './chi-tiet-don-vi-tkct.interface';
import { HoatDongCPXDEntity } from './hoat-dong-cpxd.interface';
import { LichSuTienDoCPXDEntity } from './lich-su-tien-do-cpxd.interface';
import { LoaiVonCongTrinhCPXDEntity } from './loai-von-cong-trinh.interface';
import { NoiDungDeNghiCPXDEntity } from './noi-dung/noi-dung-de-nghi-cp.interface';
import { ThoiGianXayDungCongTrinhEntity } from './thoi-gian-xd-ct.interface';
import { TienDoCPXDEntity } from './tien-do-cong-trinh-xay-dung.interface';
import { TinhTrangTraHoSoCPXDEntity } from './tinh-trang-tra-ho-so/tinh-trang-tra-ho-so.interface';
import { VanBanCPXDEntity } from './van-ban-cpxd.interface';

export interface ThongTinCongTrinhCPXDEntity {
  maCTCha?: string;
  congTrinhCha?: Partial<ThongTinCongTrinhCPXDEntity>;
  maCTCPXD: string;
  maCTXD: string;
  maHoSo: string;
  diaChi: DiaChiEntity;
  dienTich: number;
  tenCongTrinh: string;
  soTo: string;
  soThua: string;
  maTienDo: string;
  tienDo: TienDoCPXDEntity;
  maVonCongTrinh: number;
  vonCongTrinh: LoaiVonCongTrinhCPXDEntity;
  maChuDauTu: string;
  chuDauTu: ChuDauTuEntity;
  noiDungDeNghi: NoiDungDeNghiCPXDEntity;
  donVis: ChiTietDonViThietKeCongTrinhEntity[];
  tgXayDungs: ThoiGianXayDungCongTrinhEntity[];
  lichSuTienDos: LichSuTienDoCPXDEntity[];
  hoatDongs: HoatDongCPXDEntity[];
  vanBans: VanBanCPXDEntity[];
  tgHetHan: ThoiGianHetHanCPXDEntity;
  shape: Polygon;
  chiTietTienDo?: ChiTietTienDoCPXDEntity;
  tinhTrangTraHoSo: TinhTrangTraHoSoCPXDEntity;
}

export interface ThoiGianHetHanCPXDEntity {
  id: number;
  congTrinhCPXD: ThongTinCongTrinhCPXDEntity;
  thoiGian: Date;
  maLoai?: number;
}

export interface ChiTietTienDoCPXDEntity {
  id?: string;
  maCTCPXD?: string;
  congTrinhCPXD?: ThongTinCongTrinhCPXDEntity;
  isTroNgai?: boolean;
}
