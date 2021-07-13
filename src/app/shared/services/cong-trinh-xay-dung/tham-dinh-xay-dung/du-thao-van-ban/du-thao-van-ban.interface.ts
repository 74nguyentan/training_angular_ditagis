import { DinhKemTDXDEntity } from '../dinh-kem/dinh-kem.interface';
import { ThongTinCongTrinhTDXDEntity } from '../thong-tin/thong-tin.interface';

export interface DuThaoVanBanTDXDEntity {
  id: number;
  maThongTin: string;
  congTrinh: ThongTinCongTrinhTDXDEntity;
  dinhKem?: DinhKemTDXDEntity;
}
