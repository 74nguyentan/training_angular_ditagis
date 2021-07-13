import { TienDoCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/tien-do-cong-trinh-xay-dung.interface';

export interface TGHetHanTienDoCPXDEntity {
  id: number;
  maTienDo: string;
  tienDo: TienDoCPXDEntity;
  soGio: number;
}
