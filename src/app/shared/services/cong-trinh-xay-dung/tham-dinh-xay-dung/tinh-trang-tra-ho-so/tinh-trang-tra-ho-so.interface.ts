import { DinhKemTDXDEntity } from '../dinh-kem/dinh-kem.interface';
import { ThongTinCongTrinhTDXDEntity } from '../thong-tin/thong-tin.interface';

export interface TinhTrangTraHoSoTDXDEntity {
  id: number;
  maThongTin: string;
  congTrinh: ThongTinCongTrinhTDXDEntity;
  isTraHoSo: boolean;
  lyDo: string;
  dinhKem?: DinhKemTDXDEntity;
}
