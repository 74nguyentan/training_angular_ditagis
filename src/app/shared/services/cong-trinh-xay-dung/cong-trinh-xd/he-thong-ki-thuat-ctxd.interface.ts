import { CongTrinhXayDungEntity } from './cong-trinh-xay-dung.interface';
import { DMHeThongDieuHoaKhongKhiEntity } from './dm-he-thong-dieu-hoa-khong-khi.interface';
import { DMHeThongPCCCEntity } from './dm-he-thong-pccc.interface';
import { DMHeThongSetTiepDiaEntity } from './dm-he-thong-set-tiep-dia.interface';
import { DMHeThongXuLyRacEntity } from './dm-he-thong-xu-ly-rac.interface';
import { DMTruHongChuaChayEntity } from './dm-tru-hong-chua-chay.interface';

export interface HeThongKyThuatCTXDEntity {
  id?: string;
  maCTXD?: string;
  congTrinhXayDung?: CongTrinhXayDungEntity;
  heThongThangMay?: string;
  baiDapTrucThang?: boolean;
  heThongThangCuon?: string;
  khung?: string;
  mayPhatDienDuPhong?: string;
  san?: string;
  maHeThongPCCC?: number;
  heThongPCCC?: DMHeThongPCCCEntity;
  maHeThongSetTiepDia?: number;
  heThongSetTiepDia?: DMHeThongSetTiepDiaEntity;
  mai?: string;
  mong?: string;
  maHeThongXuLyRac?: number;
  heThongXuLyRac?: DMHeThongXuLyRacEntity;
  chieuSauMong?: number;
  maHeThongDieuHoaKhongKhi?: number;
  heThongDieuHoaKhongKhi?: DMHeThongDieuHoaKhongKhiEntity;
  maTruHongChuaChay?: number;
  truHongChuaChay?: DMTruHongChuaChayEntity;
  heThongCungCapGas?: boolean;
  sanThuong?: boolean;
  soChoDeXe?: number;
  dienTichSanThuong?: number;
  ghiChu?: string;
}
