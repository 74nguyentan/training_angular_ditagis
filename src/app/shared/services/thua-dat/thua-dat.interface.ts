import { QuanHuyenEntity, PhuongXaEntity } from '@shared/interfaces/hanh-chinh/hanh-chinh-huyen.interface';
import {NestCrudLeafletEntity} from 'ditagis-leaflet'
export interface ThuaDatEntity extends NestCrudLeafletEntity {
  OBJECTID?: number;
  DienTich?: number;
  MaPhuongXa?: string;
  MaQuanHuyen?: string;
  SoTo?: string;
  SoThua?: string;
  QuanHuyen?: QuanHuyenEntity;
  RanhGioiHanhChinh?: PhuongXaEntity;
  shape?: GeoJSON.Polygon;
}