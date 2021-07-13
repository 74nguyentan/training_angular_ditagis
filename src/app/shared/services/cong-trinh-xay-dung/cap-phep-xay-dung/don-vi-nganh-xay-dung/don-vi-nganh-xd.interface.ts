import { ChungChiDonViXayDungEntity } from './chung-chi-dvxd.interface';

export interface DonViNganhXayDungEntity {
  maDonVi?: string;
  tenDonVi?: string;
  chungChis?: ChungChiDonViXayDungEntity[];
}
