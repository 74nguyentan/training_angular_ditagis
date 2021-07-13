import { DinhKemCPXDEntity } from '../dinh-kem-cpxd.interface';
import { ThongTinCongTrinhCPXDEntity } from '../thong-tin-cong-trinh-cpxd.interface';

export interface TinhTrangTraHoSoCPXDEntity {
  id: number;
  maThongTin: string;
  congTrinh: ThongTinCongTrinhCPXDEntity;
  isTraHoSo: boolean;
  lyDo: string;

  dinhKem?: DinhKemCPXDEntity;
}
