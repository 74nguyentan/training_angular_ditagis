import { ChuDauTuEntity } from './chu-dau-tu.interface';
import { QuanLyTepEntity } from './tep-chia-se.interface';
import { VanBanDoAnEntity, VanBanEntity } from './van-ban.interface';

export interface DinhKemEntity {
    id?: string;
    maChuDauTu?: string;
    vanBan?: VanBanDoAnEntity;
    maLoai?: string;
    loai?: LoaiDinhKemEntity;
    fileId?: string;
    file?: QuanLyTepEntity;
}
export interface LoaiDinhKemEntity {
    maLoai?: string;
    tenLoai?: string;
    stt?: number;
}
