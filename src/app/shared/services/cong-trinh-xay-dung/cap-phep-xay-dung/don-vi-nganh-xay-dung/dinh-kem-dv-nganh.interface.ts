import { QuanLyTepEntity } from '@shared/interfaces/tep-chia-se.interface';
import { DonViNganhXayDungEntity } from './don-vi-nganh-xd.interface';
import { LoaiDinhKemDonViNganhXayDungEntity } from './loai-dinh-kem-dv-nganh-xay-dung.interface';

export interface DinhKemDonViNganhXayDungEntity {
  fileld?: string;
  file?: QuanLyTepEntity;
  maLoai?: number;
  loai?: LoaiDinhKemDonViNganhXayDungEntity;
  maDonVi?: string;
  donVi?: DonViNganhXayDungEntity;
}
