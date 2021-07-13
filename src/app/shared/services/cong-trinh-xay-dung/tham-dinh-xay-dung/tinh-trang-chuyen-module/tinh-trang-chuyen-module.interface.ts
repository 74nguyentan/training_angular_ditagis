import { ThongTinCongTrinhCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/thong-tin-cong-trinh-cpxd.interface';
import { ThongTinCongTrinhTDXDEntity } from '../../tham-dinh-xay-dung/thong-tin/thong-tin.interface';

export interface TinhTrangChuyenModuleTDXDEntity {
  id: number;

  maTDXD: string;
  congTrinh: ThongTinCongTrinhTDXDEntity;

  maCPXD: string;
  congTrinhCPXD: ThongTinCongTrinhCPXDEntity;
}
