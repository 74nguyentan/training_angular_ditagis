import { TGHetHanTienDoTDXDEntity } from './thoi-gian-tien-do/thoi-gian-tien-do.interface';

export class TienDoTDXDEntity {
  maTienDo: string;
  tenTienDo: string;
  maTienDoTienQuyet: string;

  tienDoTienQuyet: TienDoTDXDEntity;

  tgHetHan: TGHetHanTienDoTDXDEntity;

  stt: number;
}

export enum TienDoTDXDEnum {
  'KetQuaThamDinh' = 'KQTD',
  'DuThaoToTrinh' = 'DTTT',
  'LayYKien' = 'LYK',
  'ThamDinhHoSo' = 'TDHS',
  'TiepNhanHoSo' = 'TNHS',
  'XetToTrinh' = 'XTT',
}
