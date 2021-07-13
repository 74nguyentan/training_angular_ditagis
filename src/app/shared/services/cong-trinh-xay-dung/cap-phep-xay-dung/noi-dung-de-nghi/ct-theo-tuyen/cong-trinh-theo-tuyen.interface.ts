import { LoaiCongTrinhEntity } from '../../../loai-cong-trinh-xay-dung.interface';
import { ThongSoCongTrinhEntity } from '../../../thong-so-cong-trinh/thong-so-cong-trinh.interface';
import { CapCongTrinhEntity } from '../../cap-cong-trinh.interface';
import { NoiDungDeNghiCPXDEntity } from '../../noi-dung/noi-dung-de-nghi-cp.interface';

export interface CongTrinhTheoTuyenTrongDoThiEntity {
  id: string;
  maCPXD?: string;
  congTrinhCapPhep: NoiDungDeNghiCPXDEntity;
  maLoaiCongTrinh?: number;
  loaiCongTrinh?: Partial<LoaiCongTrinhEntity>;
  maCapCongTrinh: number;
  capCongTrinh: Partial<CapCongTrinhEntity>;
  huongTuyenVaViTriXayDung: string;
  quyMoXayDung: string;
  cotCongTrinh: Partial<ThongSoCongTrinhEntity>;
  chieuCaoTinhKhongCuaTuyen?: Partial<ThongSoCongTrinhEntity>;
  doSauCongTrinh: Partial<ThongSoCongTrinhEntity>;
  isCapTheoGiaiDoan?: boolean;
}
