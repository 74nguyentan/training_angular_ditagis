import { ThongSoCongTrinhEntity } from '@shared/services/cong-trinh-xay-dung/thong-so-cong-trinh/thong-so-cong-trinh.interface';
import { CongTrinhKhongTheoTuyenGiaiDoanEntity } from '../ct-khong-theo-tuyen-giai-doan.interface';

export interface ChiTietCongTrinhKhongTheoTuyenGiaiDoanEntity {
  id: number;
  parentId: string;
  parent: CongTrinhKhongTheoTuyenGiaiDoanEntity;

  chieuSauCongTrinh: Partial<ThongSoCongTrinhEntity>;

  dienTichXayDungTret?: Partial<ThongSoCongTrinhEntity>;

  tongDienTichSan: Partial<ThongSoCongTrinhEntity>;

  chieuCaoCongTrinh: Partial<ThongSoCongTrinhEntity>;

  soTang: Partial<ThongSoCongTrinhEntity>;

  mauSacCongTrinh?: string;
}
