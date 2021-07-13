import { QuanLyTepEntity } from '@shared/interfaces/tep-chia-se.interface';
import { LoaiDinhKemTDXDEntity } from './loai-dinh-kem/loai-dinh-kem.interface';

export interface DinhKemTDXDEntity {
  id: string;
  fileId: string;

  file: QuanLyTepEntity;
  maLoaiDinhKem: number;

  loaiDinhKem: LoaiDinhKemTDXDEntity;
}
