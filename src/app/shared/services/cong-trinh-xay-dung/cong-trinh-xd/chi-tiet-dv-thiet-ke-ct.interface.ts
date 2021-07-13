import { ChungChiDonViXayDungEntity } from '../cap-phep-xay-dung/don-vi-nganh-xay-dung/chung-chi-dvxd.interface';
import { DonViNganhXayDungEntity } from '../cap-phep-xay-dung/don-vi-nganh-xay-dung/don-vi-nganh-xd.interface';
import { VaiTroDonViNganhXD } from '../cap-phep-xay-dung/don-vi-nganh-xay-dung/vai-tro-don-vi-nxd.interface';
import { CongTrinhXayDungEntity } from './cong-trinh-xay-dung.interface';

export interface ChiTietDonViThietKeCongTrinhXDEntity {
  id?: string;
  maCTXD?: string;
  congTrinhXayDung?: CongTrinhXayDungEntity;
  maDonVi?: string;
  donVi?: DonViNganhXayDungEntity;
  maVaiTroDV?: string;
  vaiTroDV?: VaiTroDonViNganhXD;
  maChungChi?: string;
  chungChi?: ChungChiDonViXayDungEntity;
}
