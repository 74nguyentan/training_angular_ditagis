import { ChungChiDonViXayDungEntity } from './don-vi-nganh-xay-dung/chung-chi-dvxd.interface';
import { DonViNganhXayDungEntity } from './don-vi-nganh-xay-dung/don-vi-nganh-xd.interface';
import { VaiTroDonViNganhXD } from './don-vi-nganh-xay-dung/vai-tro-don-vi-nxd.interface';
import { ThongTinCongTrinhCPXDEntity } from './thong-tin-cong-trinh-cpxd.interface';

export interface ChiTietDonViThietKeCongTrinhEntity {
  id?: string;
  maCTCPXD?: string;
  congTrinhCPXD?: ThongTinCongTrinhCPXDEntity;
  maDonVi?: string;
  donVi?: DonViNganhXayDungEntity;
  maVaiTroDV?: string;
  vaiTroDV?: VaiTroDonViNganhXD;
  maChungChi?: string;
  chungChi?: ChungChiDonViXayDungEntity;
}
