import { DoAnEntity } from './do-an.interface';
import { QuanLyTepEntity, UserEntity } from './tep-chia-se.interface';

export interface HinhAnhDoAnEntity {
    id?: string;
    maLoaiHinhAnh?: string;
    loaiHinhAnh?: LoaiHinhAnhDAEntity;
    maDoAn?: string;
    doAn?: DoAnEntity;
    thoiGianCapNhat?: Date;
    nguoiCapNhat?: UserEntity;
    fileId?: string;
    file?: QuanLyTepEntity;
}
export interface LoaiHinhAnhDAEntity {
    maLoaiHinhAnh?: string;
    tenLoaiHinhAnh?: string;
}
