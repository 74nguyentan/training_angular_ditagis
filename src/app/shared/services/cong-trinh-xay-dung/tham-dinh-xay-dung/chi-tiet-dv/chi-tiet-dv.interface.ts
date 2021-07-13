import { DonViNganhXayDungEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/don-vi-nganh-xay-dung/don-vi-nganh-xd.interface';
import { VaiTroDonViNganhXD } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/don-vi-nganh-xay-dung/vai-tro-don-vi-nxd.interface';
import { ChungChiDonViXayDungTDXDEntity } from '../chung-chi/chung-chi.interface';
import { ThongTinCongTrinhTDXDEntity } from '../thong-tin/thong-tin.interface';

export interface ChiTietDonViThietKeCongTrinhTDXDEntity {
  id: string;
  maCTTDXD: number;

  congTrinhTDXD: ThongTinCongTrinhTDXDEntity;
  maDonVi: string;

  donVi: DonViNganhXayDungEntity;
  maVaiTroDV: string;

  vaiTroDV: VaiTroDonViNganhXD;

  maChungChi: number;
  chungChi: ChungChiDonViXayDungTDXDEntity;
}
