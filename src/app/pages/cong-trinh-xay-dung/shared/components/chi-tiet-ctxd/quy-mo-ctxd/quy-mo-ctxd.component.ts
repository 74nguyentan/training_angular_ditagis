import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import {
  CapCongTrinhService,
  QuyMoCTXDService,
} from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.service';
import { CongTrinhXayDungEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/cong-trinh-xay-dung.interface';
import { QuyMoCTXDEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/quy-mo-ctxd.interface';
import { LoaiCongTrinhXayDungService } from '@shared/services/cong-trinh-xay-dung/dm-loai-cong-trinh-xay-dung/dm-loai-cong-trinh-xay-dung.service';

@Component({
  selector: 'ga-quy-mo-ctxd',
  templateUrl: './quy-mo-ctxd.component.html',
  styleUrls: ['./quy-mo-ctxd.component.css'],
})
export class QuyMoCtxdComponent implements OnInit {
  maLoaiCongTrinh: number;
  maCapCongTrinh: number;
  id: string;
  lstCongTrinhXayDung: CongTrinhXayDungEntity[] = [];
  @Input() maCTXD: string;
  constructor(
    private route: ActivatedRoute,
    private toast: NbToastrService,
    public loaiCongTrinhXayDungService: LoaiCongTrinhXayDungService,
    public capCongTrinhService: CapCongTrinhService,
    public quyMoCongTrinhService: QuyMoCTXDService
  ) {}

  ngOnInit() {
    this.quyMoCongTrinhService
      .getMany({
        fields: [
          'dienTichXayDung',
          'congNang',
          'maLoaiCongTrinh',
          'maCapCongTrinh',
          'congSuat',
          'tuoiThoCongTrinh',
        ],
        filter: {
          field: 'maCTXD',
          operator: '$eq',
          value: this.maCTXD,
        },
        join: [
          { field: 'loaiCongTrinh' },
          { field: 'capCongTrinh' },
          { field: 'cotXayDung', select: ['noiDung', 'giaTri'] },
          { field: 'tongDienTichSan', select: ['noiDung', 'giaTri'] },
          { field: 'chieuCaoCongTrinh', select: ['noiDung', 'giaTri'] },
          { field: 'soTang', select: ['noiDung', 'giaTri'] },
          { field: 'soLuongCauThangThoatHiem', select: ['noiDung', 'giaTri'] },
          { field: 'soLuongLoiThoatHiem', select: ['noiDung', 'giaTri'] },
          { field: 'chieuCaoTangHam', select: ['noiDung', 'giaTri'] },
        ],
      })
      .subscribe(
        ([s]) =>
          (this.quyMo = {
            ...this.quyMo,
            ...s,
          })
      );
  }

  quyMo: QuyMoCTXDEntity = {
    loaiCongTrinh: {},
    capCongTrinh: {},
    cotXayDung: {},
    tongDienTichSan: {},
    chieuCaoCongTrinh: {},
    soTang: {},
    soLuongCauThangThoatHiem: {},
    soLuongLoiThoatHiem: {},
    chieuCaoTangHam: {},
  };

  change(name: string, value) {
    this.quyMo[name] = value;
    this.quyMoCongTrinhService
      .patch(this.quyMo.id, {
        [name]: value,
      })
      .subscribe();
  }
  changeThongSo(name: string, name1: string, value) {
    if (!this.quyMo[name]) {
      this.quyMo[name] = {};
    }
    this.quyMo[name][name1] = value;
    this.quyMoCongTrinhService
      .patch(this.quyMo.id, {
        [name]: this.quyMo[name],
      })
      .subscribe();
  }

  checkValid() {
    const quyMoCTXD = this.quyMo;
    if (!quyMoCTXD.dienTichXayDung) {
      throw new Error('Vui l??ng nh???p di???n t??ch');
    }
    if (!quyMoCTXD.cotXayDung.giaTri) {
      throw new Error('Vui l??ng nh???p c???t x??y d???ng');
    }
    if (!quyMoCTXD.tongDienTichSan.giaTri) {
      throw new Error('Vui l??ng nh???p t???ng di???n t??ch s??n');
    }

    if (!quyMoCTXD.chieuCaoCongTrinh.giaTri) {
      throw new Error('Vui l??ng nh???p chi???u cao c??ng tr??nh');
    }
    if (!quyMoCTXD.soTang.giaTri) {
      throw new Error('Vui l??ng nh???p s??? t???ng c???a c??ng tr??nh');
    }
    if (!quyMoCTXD.soLuongCauThangThoatHiem.giaTri) {
      throw new Error('Vui l??ng nh???p s??? l?????ng c???u thang tho??t hi???m');
    }
    if (!quyMoCTXD.soLuongLoiThoatHiem.giaTri) {
      throw new Error('Vui l??ng nh???p s??? l?????ng l???i tho??t hi???m');
    }
    if (!quyMoCTXD.chieuCaoTangHam.giaTri) {
      throw new Error('Vui l??ng nh???p chi???u cao t???ng h???m');
    }
  }
}
