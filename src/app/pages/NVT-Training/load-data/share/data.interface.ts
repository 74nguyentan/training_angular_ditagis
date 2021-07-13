import { ChuDauTuEntity } from "@shared/interfaces/chu-dau-tu.interface";
import { DiaChiEntity } from "@shared/interfaces/dia-chi.interface";
import { ChiTietDonViThietKeCongTrinhEntity } from "@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/chi-tiet-don-vi-tkct.interface";
import { ThongTinCongTrinhCPXDEntity } from "@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/thong-tin-cong-trinh-cpxd.interface";
import { TienDoCPXDEntity } from "@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/tien-do-cong-trinh-xay-dung.interface";
import { HinhAnhCTXDEntity } from "@shared/services/cong-trinh-xay-dung/cong-trinh-xd/hinh-anh-ctxd.interface";
import { VanBanCTXDEntity } from "@shared/services/cong-trinh-xay-dung/cong-trinh-xd/van-ban-ctxd.interface";
import Polygon from "esri/geometry/Polygon";
import { TienDoEntity } from "./tienDo.interface";

export interface DemoDataEntity {
    maCTXD?: string;
    capPhepXayDung?: ThongTinCongTrinhCPXDEntity;
    diaChi?: DiaChiEntity;
    dienTich?: number;
    maTienDo?: string;
    tienDo?: TienDoCPXDEntity;
    tenCongTrinh?: string;
    loDat?: string;
    maChuDauTu?: string;
    chuDauTu?: ChuDauTuEntity;
    vanBans?: VanBanCTXDEntity[];
    hinhAnhs?: HinhAnhCTXDEntity[];
    donVis?: ChiTietDonViThietKeCongTrinhEntity[];
    shape?: Polygon;
  }