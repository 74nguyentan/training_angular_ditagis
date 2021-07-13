import { DinhKemTDCSEntity } from '../dinh-kem/dinh-kem.interface';
import { ThongTinCongTrinhTDCSEntity } from '../thong-tin/thong-tin.interface';

export interface TinhTrangTraHoSoTDCSEntity {
  id: number;
  maThongTin: string;
  congTrinh: ThongTinCongTrinhTDCSEntity;
  isTraHoSo: boolean;
  lyDo: string;
  dinhKem?: DinhKemTDCSEntity;
}
