import { QuanLyTepEntity } from '@shared/interfaces/tep-chia-se.interface';
import { ThongTinCongTrinhTDCSEntity } from '../thong-tin/thong-tin.interface';
import { LoaiDinhKemTDCSEntity } from './loai-dinh-kem/loai-dinh-kem.interface';

export interface DinhKemTDCSEntity {
  id: string;
  fileId: string;
  maCTTDCS:string;
  congTrinh:ThongTinCongTrinhTDCSEntity;

  file: QuanLyTepEntity;
  maLoaiDinhKem: number;

  loaiDinhKem: LoaiDinhKemTDCSEntity;
}
