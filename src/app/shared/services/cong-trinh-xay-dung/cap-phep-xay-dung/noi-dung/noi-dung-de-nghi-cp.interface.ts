import { LoaiCongTrinhCPXDEntity } from '../../../../services/cong-trinh-xay-dung/cap-phep-xay-dung/loai-cong-trinh/loai-cong-trinh.interface';
import { DinhKemCPXDEntity } from '../dinh-kem-cpxd.interface';
import { CongTrinhTheoDuAnEntity } from '../noi-dung-de-nghi/cong-trinh-theo-du-an/cong-trinh-theo-du-an.interface';
import { CongTrinhKhongTheoTuyenGiaiDoanEntity } from '../noi-dung-de-nghi/ct-khong-theo-tuyen-giai-doan/ct-khong-theo-tuyen-giai-doan.interface';
import { CongTrinhKhongTheoTuyenEntity } from '../noi-dung-de-nghi/ct-khong-theo-tuyen/cong-trinh-khong-theo-tuyen.interface';
import { CongTrinhCPXDNgamEntity } from '../noi-dung-de-nghi/ct-ngam/ct-ngam.interface';
import { CongTrinhNhaORiengLeEntity } from '../noi-dung-de-nghi/ct-nha-o-rieng-le/cong-trinh-nha-o-rieng-le.interface';
import { CongTrinhTheoTuyenGiaiDoanEntity } from '../noi-dung-de-nghi/ct-theo-tuyen-giai-doan/ct-theo-tuyen-giai-doan.interface';
import { CongTrinhTheoTuyenTrongDoThiEntity } from '../noi-dung-de-nghi/ct-theo-tuyen/cong-trinh-theo-tuyen.interface';
import { ThongTinCongTrinhCPXDEntity } from '../thong-tin-cong-trinh-cpxd.interface';
import { CongTrinhCaiTaoSuaChuaEntity } from './con-trinh-cai-tao-sua-chua.interface';
import { CongTrinhDiDoiEntity } from './cong-trinh-di-doi.interface';
import { CongTrinhQuangCaoEntity } from './cong-trinh-quang-cao.interface';
import { CongTrinhTuongDaiTranhHoanhTrangEntity } from './cong-trinh-tuong-dai-ht.interface';

export interface NoiDungDeNghiCPXDEntity {
  maCPXD?: string;
  maCTCPXD?: string;
  congTrinhCPXD?: ThongTinCongTrinhCPXDEntity;
  dinhKems?: DinhKemCPXDEntity[];
  maLoaiCongTrinhCPXD?: number;
  loaiCongTrinhCPXD?: Partial<LoaiCongTrinhCPXDEntity>;
  congTrinhKhongTheoTuyen?: Partial<CongTrinhKhongTheoTuyenEntity>;
  congTrinhTheoTuyenTrongDoThi?: Partial<CongTrinhTheoTuyenTrongDoThiEntity>;
  congTrinhKhongTheoTuyenGiaiDoan?: Partial<CongTrinhKhongTheoTuyenGiaiDoanEntity>;
  congTrinhTheoTuyenGiaiDoan?: Partial<CongTrinhTheoTuyenGiaiDoanEntity>;
  congTrinhTuongDaiTranhHoanhTrang?: Partial<CongTrinhTuongDaiTranhHoanhTrangEntity>;
  congTrinhTheoDuAn?: Partial<CongTrinhTheoDuAnEntity>;
  congTrinhCaiTaoSuaChua?: Partial<CongTrinhCaiTaoSuaChuaEntity>;
  congTrinhDiDoi?: Partial<CongTrinhDiDoiEntity>;
  congTrinhNhaORiengLe?: Partial<CongTrinhNhaORiengLeEntity>;
  congTrinhQuangCao?: Partial<CongTrinhQuangCaoEntity>;
  congTrinhNgam?: Partial<CongTrinhCPXDNgamEntity>;
}
