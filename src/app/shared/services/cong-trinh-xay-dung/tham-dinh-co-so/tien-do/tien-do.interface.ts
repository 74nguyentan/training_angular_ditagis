import { TGHetHanTienDoTDCSEntity } from './thoi-gian-tien-do/thoi-gian-tien-do.interface';

export class TienDoTDCSEntity {
  maTienDo: string;
  tenTienDo: string;
  maTienDoTienQuyet: string;
  tienDoTienQuyet: TienDoTDCSEntity;
  tgHetHan: TGHetHanTienDoTDCSEntity;
  stt: number;
}

export enum TienDoTDCSEnum {
  'KetQuaThamDinh' = 'KQTD',
  'DuThaoToTrinh' = 'DTTT',
  'LayYKien' = 'LYK',
  'ThamDinhHoSo' = 'TDHS',
  'TiepNhanHoSo' = 'TNHS',
  'XetToTrinh' = 'XTT',
}
