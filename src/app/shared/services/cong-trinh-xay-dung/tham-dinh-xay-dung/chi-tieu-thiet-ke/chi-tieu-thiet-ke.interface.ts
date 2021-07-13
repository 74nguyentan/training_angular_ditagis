import { ThongTinCongTrinhTDXDEntity } from '../thong-tin/thong-tin.interface';

export interface ChiTieuThietKeTDXDEntity {
  id: number;
  maCTTDCS: string;
  congTrinh: ThongTinCongTrinhTDXDEntity;
  dienTich: number;
  dtDatXD: number;
  dtDatXDHH: number;
  dtDatXDMoi: number;
  dtSan: number;
  dtGTSB: number;
  tyLeDTGTSB: number;
  dtCX: number;
  tyLeDTCX: number;
  dtSanXDMoi: number;
  tangCaoToiDa: number;
  chieuCaoToiDa: number;
  matDoXD: number;
  hssdd: number;
}
