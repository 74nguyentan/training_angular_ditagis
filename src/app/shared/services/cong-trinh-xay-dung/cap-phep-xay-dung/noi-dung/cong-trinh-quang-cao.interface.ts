import { LoaiCongTrinhEntity } from '../../loai-cong-trinh-xay-dung.interface';
import { CapCongTrinhEntity } from '../cap-cong-trinh.interface';
import { NoiDungDeNghiCPXDEntity } from './noi-dung-de-nghi-cp.interface';

export interface CongTrinhQuangCaoEntity {
  id: string;
  maCPXD?: string;
  congTrinhCapPhep?: NoiDungDeNghiCPXDEntity;
  maLoaiCongTrinh?: number;
  loaiCongTrinh?: LoaiCongTrinhEntity;
  maCapCongTrinh?: number;
  capCongTrinh?: CapCongTrinhEntity;
  dienTichXayDung?: number;
  cotXayDung?: number;
  chieuCaoCongTrinh?: number;
  noiDungQuangCao?: string;
}
