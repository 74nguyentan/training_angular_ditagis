import { ThongSoCongTrinhEntity } from '@shared/services/cong-trinh-xay-dung/thong-so-cong-trinh/thong-so-cong-trinh.interface';
import { CapCongTrinhEntity } from '../../cap-cong-trinh.interface';
import { LoaiCongTrinhCPXDEntity } from '../../loai-cong-trinh/loai-cong-trinh.interface';
import { CongTrinhTheoDuAnEntity } from './cong-trinh-theo-du-an.interface';

export interface ChiTietCongTrinhTheoDuAnEntity {
  id: string;
  maCTTDA?: string;
  congTrinhTheoDuAn?: CongTrinhTheoDuAnEntity;
  tenCongTrinh: string;
  maLoaiCongTrinh: number;
  loaiCongTrinh: Partial<LoaiCongTrinhCPXDEntity>;
  maCapCongTrinh: number;
  capCongTrinh: Partial<CapCongTrinhEntity>;
  cotXayDung: Partial<ThongSoCongTrinhEntity>;
  chieuCaoCongTrinh: Partial<ThongSoCongTrinhEntity>;
  soTang: Partial<ThongSoCongTrinhEntity>;
  dienTich: number;
}
