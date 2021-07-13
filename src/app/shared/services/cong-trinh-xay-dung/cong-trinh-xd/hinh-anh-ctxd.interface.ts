import { QuanLyTepEntity } from '@shared/interfaces/tep-chia-se.interface';
import { CongTrinhXayDungEntity } from './cong-trinh-xay-dung.interface';
import { LoaiHinhAnhCTXDEntity } from './loai-hinh-anh.interface';

export interface HinhAnhCTXDEntity {
  id?: string;
  maCTXD?: string;
  congTrinhXayDung?: CongTrinhXayDungEntity;
  tenHinhAnh?: string;
  fileld?: string;
  file?: QuanLyTepEntity;
  maLoaiHinhAnh?: string;
  loaiHinhAnh?: LoaiHinhAnhCTXDEntity;
}
