import { ThongTinCongTrinhEntity } from '../cong-trinh-xay-dung.interface';

export class ChiTietDonViCongTrinhEntity {
  id?: string;
  congTrinh?: ThongTinCongTrinhEntity;
  donVi?: DonViNganhXDEntity;
  vaiTroDV?: VaiTroDonViNganhXDEntity;
}

export class DonViNganhXDEntity {
  maDonVi?: string;
  tenDonVi?: string;
}

export class VaiTroDonViNganhXDEntity {
  maVaiTroDV?: number;
  tenVaiTroDV?: string;
}
