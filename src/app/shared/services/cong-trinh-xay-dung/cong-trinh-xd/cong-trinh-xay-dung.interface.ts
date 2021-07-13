import { ChuDauTuEntity } from '@shared/interfaces/chu-dau-tu.interface';
import { DiaChiEntity } from '@shared/interfaces/dia-chi.interface';
import { Polygon } from 'geojson';
import { ChiTietDonViThietKeCongTrinhEntity } from '../cap-phep-xay-dung/chi-tiet-don-vi-tkct.interface';
import { ThongTinCongTrinhCPXDEntity } from '../cap-phep-xay-dung/thong-tin-cong-trinh-cpxd.interface';
import { TienDoCPXDEntity } from '../cap-phep-xay-dung/tien-do-cong-trinh-xay-dung.interface';
import { HinhAnhCTXDEntity } from './hinh-anh-ctxd.interface';
import { VanBanCTXDEntity } from './van-ban-ctxd.interface';

export interface CongTrinhXayDungEntity {
  maCTXD?: string;
  capPhepXayDung?: ThongTinCongTrinhCPXDEntity;
  diaChi?: DiaChiEntity;
  dienTich?: number;
  maTienDo?: string;
  tienDo?: TienDoCPXDEntity;
  tenCongTrinh?: string;
  loDat?: string;
  maChuDauTu?: string;
  chuDauTu?: ChuDauTuEntity;
  vanBans?: VanBanCTXDEntity[];
  hinhAnhs?: HinhAnhCTXDEntity[];
  donVis?: ChiTietDonViThietKeCongTrinhEntity[];
  shape?: Polygon;
}
 