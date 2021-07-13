import { DonViNganhXayDungEntity } from './don-vi-nganh-xd.interface';

export interface ChungChiDonViXayDungEntity {
  maChungChi?: string;
  maDonVi?: string;
  donVi?: DonViNganhXayDungEntity;
  chungChiHanhNghe?: string;
  ngayCap?: Date;
  so?: string;
  noiCap?: string;
  ghiChu?: string;
}
