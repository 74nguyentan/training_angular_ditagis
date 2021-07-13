import { QuanLyTepEntity } from '@shared/interfaces/tep-chia-se.interface';
import { NoiDungDeNghiCPXDEntity } from './noi-dung/noi-dung-de-nghi-cp.interface';

export interface DinhKemCPXDEntity {
  id?: string;
  maCPXD?: string;
  congTrinhCapPhep?: NoiDungDeNghiCPXDEntity;
  fileId?: string;
  file?: QuanLyTepEntity;
  maLoaiDinhKem?: number;
  loaiDinhKem?: LoaiDinhKemCPXDEntity;
}
export interface LoaiDinhKemCPXDEntity {
  maLoaiDinhKem?: number;
  tenLoaiDinhKem?: string;
  stt?: number;
}
