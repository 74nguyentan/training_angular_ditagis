export interface TienDoCPXDEntity {
  maTienDo?: string;
  tenTienDo?: string;
  maTienDoTienQuyet?: string;
  tienDoTienQuyet?: TienDoCPXDEntity;
  stt?: number;
}

export enum TienDoCPXDEnum {
  CapPhepXayDung = 'CPXD',
  DuThaoToTrinhGiayPhep = 'DTTT',
  LayYKien = 'LYK',
  ThamDinhHoSo = 'TDHS',
  TiepNhanHoSo = 'TNHS',
  XetToTrinh = 'XTT',
}
