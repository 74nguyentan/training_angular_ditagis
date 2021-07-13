import { ThongTinCongTrinhTDCSEntity } from '../thong-tin/thong-tin.interface';

export interface ChiTieuThietKeTDCSEntity {
  id?: number;
  maCTTDCS?: string;
  congTrinh: ThongTinCongTrinhTDCSEntity;
  dienTich?: number;
  dtDatXD?: number;
  dtDatXDHH?: number;
  dtDatXDMoi?: number;
  dtSan?: number;
  dtGTSB?: number;
  tyLeDTGTSB?: number;
  dtCX?: number;
  tyLeDTCX?: number;
  dtSanXDMoi?: number;
  tangCaoToiDa?: number;
  chieuCaoToiDa?: number;
  matDoXD?: number;
  hssdd?: number;
}
