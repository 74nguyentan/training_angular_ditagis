import { CapCongTrinhEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.interface';
import { LoaiCongTrinhCPXDEntity } from '../../loai-cong-trinh/loai-cong-trinh.interface';
import { NoiDungDeNghiCPXDEntity } from '../../noi-dung/noi-dung-de-nghi-cp.interface';
import { ChiTietCongTrinhTheoTuyenGiaiDoanEntity } from './ct-theo-tuyen-giai-doan-chi-tiet/chi-tiet.interface';

export interface CongTrinhTheoTuyenGiaiDoanEntity {
  id: string;
  maCPXD: string;
  congTrinhCapPhep: NoiDungDeNghiCPXDEntity;
  maLoaiCongTrinh: number;

  loaiCongTrinh: LoaiCongTrinhCPXDEntity;
  maCapCongTrinh: number;

  capCongTrinh: CapCongTrinhEntity;

  giaiDoans: Partial<ChiTietCongTrinhTheoTuyenGiaiDoanEntity>[];
}
