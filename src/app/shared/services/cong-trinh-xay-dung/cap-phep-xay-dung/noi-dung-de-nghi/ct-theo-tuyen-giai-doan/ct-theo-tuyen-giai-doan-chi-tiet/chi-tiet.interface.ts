import { DiaChiEntity } from '@shared/interfaces/dia-chi.interface';
import { ThongSoCongTrinhEntity } from '@shared/services/cong-trinh-xay-dung/thong-so-cong-trinh/thong-so-cong-trinh.interface';
import { CongTrinhTheoTuyenGiaiDoanEntity } from '../ct-theo-tuyen-giai-doan.interface';

export interface ChiTietCongTrinhTheoTuyenGiaiDoanEntity {
  id: number;
  parentId: string;
  parent: CongTrinhTheoTuyenGiaiDoanEntity;

  diaChiXD: DiaChiEntity;

  huongTuyen: string;

  cotXayDung: Partial<ThongSoCongTrinhEntity>;

  chieuSauCongTrinh: Partial<ThongSoCongTrinhEntity>;

  tongChieuDai?: Partial<ThongSoCongTrinhEntity>;

  chieuCaoTinhKhong?: Partial<ThongSoCongTrinhEntity>;
}
