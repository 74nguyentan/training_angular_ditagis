import { LoaiCongTrinhEntity } from '../../loai-cong-trinh-xay-dung.interface';
import { CapCongTrinhEntity } from '../cap-cong-trinh.interface';
import { NoiDungDeNghiCPXDEntity } from './noi-dung-de-nghi-cp.interface';

export interface CongTrinhTuongDaiTranhHoanhTrangEntity {
  id: string;
  maCPXD?: string;
  congTrinhCapPhep?: NoiDungDeNghiCPXDEntity;
  maLoaiCongTrinh?: number;
  loaiCongTrinh?: LoaiCongTrinhEntity;
  maCapCongTrinh?: string;
  capCongTrinh?: CapCongTrinhEntity;
  dienTichXayDung?: number;
  cotXayDung?: number;
  chieuCaoCongTrinh?: number;
}
