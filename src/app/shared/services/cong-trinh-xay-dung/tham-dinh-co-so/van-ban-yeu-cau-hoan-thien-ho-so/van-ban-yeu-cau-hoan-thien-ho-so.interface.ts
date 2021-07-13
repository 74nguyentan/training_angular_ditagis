import { DinhKemTDCSEntity } from '../dinh-kem/dinh-kem.interface';
import { ThongTinCongTrinhTDCSEntity } from '../thong-tin/thong-tin.interface';

export interface VanBanYeuCauHoanThienHoSoTDCSEntity {
  id: number;
  maThongTin: string;
  congTrinh: ThongTinCongTrinhTDCSEntity;
  dinhKem?: DinhKemTDCSEntity;
}
