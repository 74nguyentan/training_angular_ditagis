export interface TienDoCTXDEntity {
  maTienDo?: string;
  tenTienDo?: string;
  maTienDoTienQuyet?: string;
  tienDoTienQuyet?: TienDoCTXDEntity;
  stt?: number;
}
export enum TienDoCTXDEnum {
  ChuaCoThongTin = 'CCTT',
  DangXayDung = 'DXD',
  DaHoanCong = 'HC',
  ChuaHoanCong = 'CHC',
  DaXayDung = 'HTH',
}
