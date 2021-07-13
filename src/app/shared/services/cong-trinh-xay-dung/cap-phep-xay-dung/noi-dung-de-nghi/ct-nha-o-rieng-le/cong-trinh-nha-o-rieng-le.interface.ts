import { ThongSoCongTrinhEntity } from '../../../thong-so-cong-trinh/thong-so-cong-trinh.interface';
import { NoiDungDeNghiCPXDEntity } from '../../noi-dung/noi-dung-de-nghi-cp.interface';

export interface CongTrinhNhaORiengLeEntity {
  id: string;
  maCPXD?: string;
  congTrinhCapPhep?: NoiDungDeNghiCPXDEntity;
  cotXayDung: Partial<ThongSoCongTrinhEntity>;
  matDoXayDung: Partial<ThongSoCongTrinhEntity>;
  heSoSDD: Partial<ThongSoCongTrinhEntity>;
  chiGioiDuongDo: Partial<ThongSoCongTrinhEntity>;
  chiGioiXayDung: Partial<ThongSoCongTrinhEntity>;
  mauSacCongTrinh?: string;
  dienTichXayDungTangTret: Partial<ThongSoCongTrinhEntity>;
  tongDienTichSan: Partial<ThongSoCongTrinhEntity>;
  soTang: Partial<ThongSoCongTrinhEntity>;
  chieuCaoCongTrinh: Partial<ThongSoCongTrinhEntity>;
}
