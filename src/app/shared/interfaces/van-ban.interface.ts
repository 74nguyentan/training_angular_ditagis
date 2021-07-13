import { LoaiVanBanEntity } from './loai-van-ban.interface';
import { QuanLyTepEntity } from './tep-chia-se.interface';
import { DoAnEntity } from './do-an.interface';

export interface VanBanDoAnEntity {
  id?: string;
  maDoAn?: string;
  doAn?:DoAnEntity;
  maVanBan?: string;
  vanBan?: VanBanEntity;
  loaiVanBan?: LoaiVanBanEntity;
}

export interface VanBanEntity {
  tenVanBan?: string;
  maVanBan?: string;
  soVanBan?: string;
  ngayPhatHanh?: Date;
  noiDung?: string;
  ghiChu?: string;
  fileId?: string;
  file?: QuanLyTepEntity;
}
