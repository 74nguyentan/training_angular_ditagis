import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CapCongTrinhEntity,
  ThongTinCongTrinhEntity,
} from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.interface';
import { ChiTietDonViThietKeCongTrinhXDEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/chi-tiet-dv-thiet-ke-ct.interface';
import { CongTrinhXayDungEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/cong-trinh-xay-dung.interface';
import { DMHeThongDieuHoaKhongKhiEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/dm-he-thong-dieu-hoa-khong-khi.interface';
import { DMHeThongPCCCEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/dm-he-thong-pccc.interface';
import { DMHeThongSetTiepDiaEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/dm-he-thong-set-tiep-dia.interface';
import { DMHeThongXuLyRacEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/dm-he-thong-xu-ly-rac.interface';
import { DMTruHongChuaChayEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/dm-tru-hong-chua-chay.interface';
import { HeThongKyThuatCTXDEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/he-thong-ki-thuat-ctxd.interface';
import { HinhAnhCTXDEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/hinh-anh-ctxd.interface';
import { LoaiHinhAnhCTXDEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/loai-hinh-anh.interface';
import { LoaiVanBanCTXDEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/loai-van-ban-ctxd.interface';
import { QuyMoCTXDEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/quy-mo-ctxd.interface';
import { VanBanCTXDEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/van-ban-ctxd.interface';
import { LoaiCongTrinhEntity } from '@shared/services/cong-trinh-xay-dung/loai-cong-trinh-xay-dung.interface';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { environment } from '../../../../environments/environment';
import { TienDoCPXDEntity } from './cap-phep-xay-dung/tien-do-cong-trinh-xay-dung.interface';
import { ThongSoCongTrinhEntity } from './thong-so-cong-trinh/thong-so-cong-trinh.interface';

@Injectable({ providedIn: 'root' })
export class CongTrinhXayDungService extends CrudBaseService<CongTrinhXayDungEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/ctxd/cong-trinh' }, http);
  }
}

@Injectable({ providedIn: 'root' })
export class ThongTinCongTrinhService extends CrudBaseService<ThongTinCongTrinhEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/ctxd/thong-tin' }, http);
  }
}

@Injectable({ providedIn: 'root' })
export class ThongSoCongTrinhService extends CrudBaseService<ThongSoCongTrinhEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/ctxd/thong-so' }, http);
  }
}
@Injectable({ providedIn: 'root' })
export class CapCongTrinhService extends CrudBaseService<CapCongTrinhEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/ctxd/cap-cong-trinh' },
      http
    );
  }
}

@Injectable({ providedIn: 'root' })
export class LoaiCongTrinhService extends CrudBaseService<LoaiCongTrinhEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/cong-trinh/loai' }, http);
  }
}

@Injectable({ providedIn: 'root' })
export class VanBanCTXDService extends CrudBaseService<VanBanCTXDEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/ctxd/van-ban/van-ban' },
      http
    );
  }
}

@Injectable({ providedIn: 'root' })
export class LoaiVanBanCTXDService extends CrudBaseService<LoaiVanBanCTXDEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/ctxd/van-ban/loai' },
      http
    );
  }
}

@Injectable({ providedIn: 'root' })
export class HinhAnhCTXDService extends CrudBaseService<HinhAnhCTXDEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/ctxd/hinh-anh/hinh-anh' },
      http
    );
  }
}

@Injectable({ providedIn: 'root' })
export class LoaiHinhAnhCTXDService extends CrudBaseService<LoaiHinhAnhCTXDEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/ctxd/hinh-anh/loai' },
      http
    );
  }
}

@Injectable({ providedIn: 'root' })
export class TienDoCTXDService extends CrudBaseService<TienDoCPXDEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/ctxd/tien-do' }, http);
  }
}

@Injectable({ providedIn: 'root' })
export class QuyMoCTXDService extends CrudBaseService<QuyMoCTXDEntity> {
  constructor(http: HttpClient) {
    super({ apiUrl: environment.apiUrl, entity: 'rest/cpxd/quy-mo' }, http);
  }
}

@Injectable({ providedIn: 'root' })
export class HeThongKiThuatCTXDService extends CrudBaseService<HeThongKyThuatCTXDEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/ctxd/he-thong-ky-thuat' },
      http
    );
  }
}

@Injectable({ providedIn: 'root' })
export class DMHeThongPCCCService extends CrudBaseService<DMHeThongPCCCEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/ctxd/dm/he-thong-pccc' },
      http
    );
  }
}

@Injectable({ providedIn: 'root' })
export class DMHeThongSetTiepDiaService extends CrudBaseService<DMHeThongSetTiepDiaEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/ctxd/dm/he-thong-set-tiep-dia',
      },
      http
    );
  }
}

@Injectable({ providedIn: 'root' })
export class HeThongTruHongChuaChayService extends CrudBaseService<DMTruHongChuaChayEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/ctxd/dm/tru-hong-chua-chay',
      },
      http
    );
  }
}

@Injectable({ providedIn: 'root' })
export class DMHeThongXuLyRacService extends CrudBaseService<DMHeThongXuLyRacEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/ctxd/dm/he-thong-xu-ly-rac' },
      http
    );
  }
}

@Injectable({ providedIn: 'root' })
export class DMHeThongDieuHoaKhongKhiService extends CrudBaseService<DMHeThongDieuHoaKhongKhiEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/ctxd/dm/he-thong-dieu-hoa-khong-khi',
      },
      http
    );
  }
}

@Injectable({ providedIn: 'root' })
export class DMTruHongChuaChayService extends CrudBaseService<DMTruHongChuaChayEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/ctxd/dm/tru-hong-chua-chay' },
      http
    );
  }
}
@Injectable({ providedIn: 'root' })
export class ChiTietDonViThietKeCongTrinhXDService extends CrudBaseService<ChiTietDonViThietKeCongTrinhXDEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/ctxd/chi-tiet-dv' },
      http
    );
  }
}
