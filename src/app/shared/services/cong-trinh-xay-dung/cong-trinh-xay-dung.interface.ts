import { Polygon } from 'geojson';
import { ChuDauTuEntity } from '../../interfaces/chu-dau-tu.interface';
import { DiaChiEntity } from '../../interfaces/dia-chi.interface';
import { ChiTietDonViThietKeCongTrinhEntity } from './cap-phep-xay-dung/chi-tiet-don-vi-tkct.interface';
import { HoatDongCPXDEntity } from './cap-phep-xay-dung/hoat-dong-cpxd.interface';
import { LichSuTienDoCPXDEntity } from './cap-phep-xay-dung/lich-su-tien-do-cpxd.interface';
import { NoiDungDeNghiCPXDEntity } from './cap-phep-xay-dung/noi-dung/noi-dung-de-nghi-cp.interface';
import { ThoiGianXayDungCongTrinhEntity } from './cap-phep-xay-dung/thoi-gian-xd-ct.interface';
import { VanBanCPXDEntity } from './cap-phep-xay-dung/van-ban-cpxd.interface';
export interface ThongTinCongTrinhEntity {
  maCTCPXD?: string;
  diaChi?: DiaChiEntity;
  dienTich?: number;
  tenCongTrinh?: string;
  loDat?: string;
  maChuDauTu?: string;
  chuDauTu?: ChuDauTuEntity;
  noiDungDeNghi?: NoiDungDeNghiCPXDEntity;
  donVis?: ChiTietDonViThietKeCongTrinhEntity[];
  tgXayDungs?: ThoiGianXayDungCongTrinhEntity[];
  lichSuTienDos?: LichSuTienDoCPXDEntity[];
  hoatDongs?: HoatDongCPXDEntity[];
  vanBans?: VanBanCPXDEntity[];
  shape?: Polygon;
}

export class CapCongTrinhEntity {
  maCapCongTrinh?: number;
  tenCapCongTrinh?: string;
}
