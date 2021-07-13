import { Component, Input, OnInit } from '@angular/core';
import {
  DMHeThongDieuHoaKhongKhiService,
  DMHeThongPCCCService,
  DMHeThongSetTiepDiaService,
  DMHeThongXuLyRacService,
  DMTruHongChuaChayService,
  HeThongKiThuatCTXDService,
} from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.service';
import { DMHeThongDieuHoaKhongKhiEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/dm-he-thong-dieu-hoa-khong-khi.interface';
import { DMHeThongPCCCEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/dm-he-thong-pccc.interface';
import { DMHeThongSetTiepDiaEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/dm-he-thong-set-tiep-dia.interface';
import { DMHeThongXuLyRacEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/dm-he-thong-xu-ly-rac.interface';
import { DMTruHongChuaChayEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/dm-tru-hong-chua-chay.interface';
import { HeThongKyThuatCTXDEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/he-thong-ki-thuat-ctxd.interface';

@Component({
  selector: 'ga-he-thong-ky-thuat',
  templateUrl: './he-thong-ky-thuat.component.html',
  styleUrls: ['./he-thong-ky-thuat.component.css'],
})
export class HeThongKyThuatComponent implements OnInit {
  id: string;
  @Input() maCTXD: string;
  lstHeThongKyThuat: HeThongKyThuatCTXDEntity[] = [];
  lstHeThongSetTiepDia: DMHeThongSetTiepDiaEntity[] = [];
  lstTruHongChuaChay: DMTruHongChuaChayEntity[] = [];
  lstDieuHoaKhongKhi: DMHeThongDieuHoaKhongKhiEntity[] = [];
  lstXuLyRac: DMHeThongXuLyRacEntity[] = [];
  lstHeThongPCCC: DMHeThongPCCCEntity[] = [];

  constructor(
    private heThongKyThuatCTXDService: HeThongKiThuatCTXDService,
    public heThongSetTiepDiaService: DMHeThongSetTiepDiaService,
    public truHongChuaChayService: DMTruHongChuaChayService,
    public heThongDieuHoaKhongKhiService: DMHeThongDieuHoaKhongKhiService,
    public heThongXuLyRacService: DMHeThongXuLyRacService,
    public heThongPCCCSerive: DMHeThongPCCCService
  ) {}

  ngOnInit() {
    this.heThongKyThuatCTXDService
      .getMany({
        fields: [
          'heThongThangMay',
          'heThongThangCuon',
          'khung',
          'mayPhatDienDuPhong',
          'san',
          'mong',
          'mai',
          'chieuSauMong',
          'baiDapTrucThang',
          'maHeThongPCCC',
          'heThongCungCapGas',
          'sanThuong',
          'soChoDeXe',
          'dienTichSanThuong',
          'ghiChu',
          'maHeThongSetTiepDia',
          'maHeThongXuLyRac',
          'maHeThongDieuHoaKhongKhi',
          'maTruHongChuaChay',
        ],
        filter: {
          field: 'maCTXD',
          operator: '$eq',
          value: this.maCTXD,
        },
        join: [
          { field: 'heThongSetTiepDia', select: ['tenDanhMuc', 'maDanhMuc'] },
          { field: 'truHongChuaChay', select: ['tenDanhMuc', 'maDanhMuc'] },
          {
            field: 'heThongDieuHoaKhongKhi',
            select: ['tenDanhMuc', 'maDanhMuc'],
          },
          { field: 'heThongXuLyRac', select: ['tenDanhMuc', 'maDanhMuc'] },
          { field: 'heThongPCCC', select: ['tenDanhMuc', 'maDanhMuc'] },
        ],
      })
      .subscribe(
        ([s]) =>
          (this.heThongKyThuat = {
            ...this.heThongKyThuat,
            ...s,
          })
      );
    this.heThongSetTiepDiaService
      .getMany({ fields: ['maDanhMuc', 'tenDanhMuc'] })
      .subscribe((l) => (this.lstHeThongSetTiepDia = l));
    this.truHongChuaChayService
      .getMany({ fields: ['maDanhMuc', 'tenDanhMuc'] })
      .subscribe((k) => (this.lstTruHongChuaChay = k));
    this.heThongDieuHoaKhongKhiService
      .getMany({ fields: ['maDanhMuc', 'tenDanhMuc'] })
      .subscribe((v) => (this.lstDieuHoaKhongKhi = v));
    this.heThongXuLyRacService
      .getMany({ fields: ['maDanhMuc', 'tenDanhMuc'] })
      .subscribe((u) => (this.lstXuLyRac = u));
    this.heThongPCCCSerive
      .getMany({ fields: ['maDanhMuc', 'tenDanhMuc'] })
      .subscribe((n) => (this.lstHeThongPCCC = n));
  }

  heThongKyThuat: HeThongKyThuatCTXDEntity = {
    heThongSetTiepDia: {},
    heThongXuLyRac: {},
    truHongChuaChay: {},
    heThongDieuHoaKhongKhi: {},
    heThongPCCC: {},
  };

  checkValid() {
    const heThongKyThuatCTXD = this.heThongKyThuat;
    if (!heThongKyThuatCTXD.heThongSetTiepDia.tenDanhMuc) {
      throw new Error('Vui lòng nhập hệ thống set tiếp địa');
    }
    if (!heThongKyThuatCTXD.truHongChuaChay.tenDanhMuc) {
      throw new Error('Vui lòng nhập trụ họng chữa cháy');
    }
  }

  onChange(name: string, value) {
    this.heThongKyThuat[name] = value;
    this.heThongKyThuatCTXDService
      .patch(this.heThongKyThuat.id, {
        [name]: value,
      })
      .subscribe();
  }
}
