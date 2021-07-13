import { LoaiCongTrinhEntity } from '../../../loai-cong-trinh-xay-dung.interface';
import { ThongSoCongTrinhEntity } from '../../../thong-so-cong-trinh/thong-so-cong-trinh.interface';
import { CapCongTrinhEntity } from '../../cap-cong-trinh.interface';
import { NoiDungDeNghiCPXDEntity } from '../../noi-dung/noi-dung-de-nghi-cp.interface';

export interface CongTrinhKhongTheoTuyenEntity {
  id: string;
  maCPXD?: string;
  congTrinhCapPhep: NoiDungDeNghiCPXDEntity;
  maLoaiCongTrinh: number;
  loaiCongTrinh: LoaiCongTrinhEntity;
  maCapCongTrinh: number;
  capCongTrinh: CapCongTrinhEntity;
  dienTichXayDung: number;
  cotXayDung: ThongSoCongTrinhEntity;
  tongDienTichSan: ThongSoCongTrinhEntity;
  chieuSauCongTrinh: ThongSoCongTrinhEntity;
  chieuCaoCongTrinh: ThongSoCongTrinhEntity;
  soTang: ThongSoCongTrinhEntity;
  isCapTheoGiaiDoan: boolean;
  matDoXayDung: ThongSoCongTrinhEntity;
  heSoSDD: ThongSoCongTrinhEntity;
  chiGioiDuongDo: number;
  chiGioiXayDung: number;
  mauSacCongTrinh?: string;
  dienTichXayDungTret: ThongSoCongTrinhEntity;
}
