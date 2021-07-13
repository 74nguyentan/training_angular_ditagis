import { DiaChiEntity } from '@shared/interfaces/dia-chi.interface';
import { LoaiCongTrinhEntity } from '../../loai-cong-trinh-xay-dung.interface';
import { CapCongTrinhEntity } from '../cap-cong-trinh.interface';
import { NoiDungDeNghiCPXDEntity } from './noi-dung-de-nghi-cp.interface';

export interface CongTrinhDiDoiEntity {
  id: string;
  congTrinhCapPhep?: NoiDungDeNghiCPXDEntity;
  maCPXD?: string;
  maLoaiCongTrinh?: number;
  loaiCongTrinh?: LoaiCongTrinhEntity;
  maCapCongTrinh?: number;
  capCongTrinh?: CapCongTrinhEntity;
  dienTichTangTret?: number;
  tongDienTichSan?: number;
  loDat?: string;
  dienTich?: number;
  chieuCaoCongTrinh?: number;
  diaDiemDiDoi?: DiaChiEntity;
  soTang?: number;
}
