import { TienDoTDCSEntity } from '../tien-do.interface';

export interface TGHetHanTienDoTDCSEntity {
  id: number;
  maTienDo: string;
  tienDo: TienDoTDCSEntity;
  soGio: number;
}
