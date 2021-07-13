import { DinhKemCPXDEntity } from '../dinh-kem-cpxd.interface';
import { ThongTinCongTrinhCPXDEntity } from '../thong-tin-cong-trinh-cpxd.interface';

export interface DuThaoVanBanCPXDEntity {
  id: number;
  maThongTin: string;
  congTrinh: ThongTinCongTrinhCPXDEntity;
  dinhKem?: DinhKemCPXDEntity;
}
