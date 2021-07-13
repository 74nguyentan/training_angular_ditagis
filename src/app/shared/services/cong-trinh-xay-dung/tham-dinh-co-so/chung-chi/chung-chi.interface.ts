import { DonViNganhXayDungEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/don-vi-nganh-xay-dung/don-vi-nganh-xd.interface';

export interface ChungChiDonViXayDungTDCSEntity {
  maChungChi: number;

  maDonVi: string;
  donVi: DonViNganhXayDungEntity;

  chungChiHanhNghe: string;
  ngayCap: Date;
  so: string;
  noiCap: string;
  ghiChu: string;
}
