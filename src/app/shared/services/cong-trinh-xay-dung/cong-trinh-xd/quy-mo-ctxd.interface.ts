import { CapCongTrinhEntity } from '../cong-trinh-xay-dung.interface';
import { DMLoaiCongTrinhXayDungEntity } from '../dm-loai-cong-trinh-xay-dung/dm-loai-cong-trinh-xay-dung.interface';
import { ThongSoCongTrinhEntity } from '../thong-so-cong-trinh/thong-so-cong-trinh.interface';
import { CongTrinhXayDungEntity } from './cong-trinh-xay-dung.interface';

export interface QuyMoCTXDEntity {
  id?: string;
  maCTXD?: string;
  congTrinhXayDung?: CongTrinhXayDungEntity;
  maLoaiCongTrinh?: number;
  loaiCongTrinh?: DMLoaiCongTrinhXayDungEntity;
  soTang?: ThongSoCongTrinhEntity;
  soLuongCauThangThoatHiem?: ThongSoCongTrinhEntity;
  soLuongLoiThoatHiem?: ThongSoCongTrinhEntity;
  chieuCaoTangHam?: ThongSoCongTrinhEntity;
  tongDienTichSan?: ThongSoCongTrinhEntity;
  chieuCaoCongTrinh?: ThongSoCongTrinhEntity;
  chieuSauCongTrinh?: ThongSoCongTrinhEntity;
  cotXayDung?: ThongSoCongTrinhEntity;
  dienTichXayDung?: number;
  maCapCongTrinh?: number;
  capCongTrinh?: CapCongTrinhEntity;
  congNang?: string;
  congSuat?: string;
  tuoiThoCongTrinh?: number;
  huongTiepCan?: string;
}
