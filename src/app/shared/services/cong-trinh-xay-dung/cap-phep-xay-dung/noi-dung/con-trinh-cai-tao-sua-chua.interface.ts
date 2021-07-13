import { LoaiCongTrinhEntity } from '../../loai-cong-trinh-xay-dung.interface';
import { ThongSoCongTrinhEntity } from '../../thong-so-cong-trinh/thong-so-cong-trinh.interface';
import { CapCongTrinhEntity } from '../cap-cong-trinh.interface';
import { NoiDungDeNghiCPXDEntity } from './noi-dung-de-nghi-cp.interface';

export interface CongTrinhCaiTaoSuaChuaEntity {
  id: string;
  maCPXD?: string;
  congTrinhCapPhep?: NoiDungDeNghiCPXDEntity;
  maLoaiCongTrinh?: number;
  loaiCongTrinh?: LoaiCongTrinhEntity;
  maCapCongTrinh?: number;
  capCongTrinh?: CapCongTrinhEntity;
  dienTichXayDungTangTret?: number;
  tongDienTichSan?: ThongSoCongTrinhEntity;
  soTang?: ThongSoCongTrinhEntity;
  chieuCaoCongTrinh?: ThongSoCongTrinhEntity;
}
