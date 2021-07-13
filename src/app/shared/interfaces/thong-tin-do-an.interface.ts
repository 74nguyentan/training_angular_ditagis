export interface ThongTinDoAnEntity {
    maDuAn?: string;
    tenDuAn?: string;
}
export interface DanhMucDoAnEntiTy {
    maDanhMuc?: string;
    tenDanhMuc?: string;
    ghiChu?: string;
    maDanhMucCha?: string;
    danhMucCha?: DanhMucDoAnEntiTy;
}
