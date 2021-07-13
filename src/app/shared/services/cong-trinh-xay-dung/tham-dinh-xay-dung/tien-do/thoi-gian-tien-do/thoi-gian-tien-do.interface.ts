import { TienDoTDXDEntity } from '../tien-do.interface';

export interface TGHetHanTienDoTDXDEntity {
  id: number;
  maTienDo: string;
  tienDo: TienDoTDXDEntity;
  soGio: number;
}
