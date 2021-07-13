import { LoaiDinhKemCPXDEntity } from './dinh-kem-cpxd.interface';

export interface LoaiCongTrinhLoaiDinhKemEntity {
  id?: string;
  maLoaiCongTrinh?: number;
  maLoaiDinhKem?: number;
  isBatBuoc?: boolean;
  loaiDinhKem?: LoaiDinhKemCPXDEntity;
}
