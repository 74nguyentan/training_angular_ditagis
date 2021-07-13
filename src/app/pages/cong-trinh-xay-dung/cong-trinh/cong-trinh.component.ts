import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CongTrinhXayDungService,
  TienDoCTXDService,
} from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.service';
import { CongTrinhXayDungEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/cong-trinh-xay-dung.interface';
import {
  TienDoCTXDEntity,
  TienDoCTXDEnum,
} from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/tien-do-ctxd.interface';
import moment from 'moment';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { DatatableComponent, DatatableService } from 'ngn-datatable';

@Component({
  selector: 'ga-cong-trinh',
  templateUrl: './cong-trinh.component.html',
  styleUrls: ['./cong-trinh.component.css'],
})
export class CongTrinhComponent implements OnInit {
  @ViewChild('table', { static: false })
  table: DatatableComponent<CongTrinhXayDungEntity>;
  moment = moment;

  datatableService: DatatableService<CongTrinhXayDungEntity> = {
    service: this.congTrinhXayDungService,
    primaryField: 'maCTXD',
    builder: this.getBuilder.bind(this),
  };
  lstTienDo: Array<TienDoCTXDEntity>;
  entityFilter: CongTrinhXayDungEntity = {
    diaChi: {},
    chuDauTu: {},
  };

  slTheoTinhTrang = {};
  checkAll = true;

  constructor(
    private congTrinhXayDungService: CongTrinhXayDungService,
    private router: Router,
    private route: ActivatedRoute,
    private tienDoCTXDSerive: TienDoCTXDService
  ) {}

  ngOnInit() {
    this.tienDoCTXDSerive
      .getMany({ fields: ['tenTienDo'] })
      .subscribe((t) => (this.lstTienDo = t));

    this.lstTinhTrangFilter.push(
      TienDoCTXDEnum.ChuaCoThongTin,
      TienDoCTXDEnum.DangXayDung,
      TienDoCTXDEnum.DaHoanCong,
      TienDoCTXDEnum.ChuaHoanCong,
      TienDoCTXDEnum.DaXayDung
    );
  }

  lstTinhTrangFilter: Array<TienDoCTXDEnum> = [];
  isCheckedTinhTrangFilter(trangThai: TienDoCTXDEnum) {
    return this.lstTinhTrangFilter.indexOf(trangThai) > -1;
  }

  thayDoiTinhTrang(e: boolean) {
    this.checkAll = e;
    if (e && this.checkAll) {
      this.lstTinhTrangFilter = [
        TienDoCTXDEnum.ChuaCoThongTin,
        TienDoCTXDEnum.DangXayDung,
        TienDoCTXDEnum.DaHoanCong,
        TienDoCTXDEnum.ChuaHoanCong,
        TienDoCTXDEnum.DaXayDung,
      ];
    }
    if (!e && !this.checkAll) {
      this.lstTinhTrangFilter = [];
    }
    this.lstTinhTrangFilter.map((tt) => {
      this.isCheckedTinhTrangFilter(tt);
    });
    this.table.loadData();
  }

  thayDoiTrangThaiFilter(trangThai: TienDoCTXDEnum, value: boolean) {
    if (value && this.isCheckedTinhTrangFilter(trangThai)) {
      return;
    }
    if (!value && !this.isCheckedTinhTrangFilter(trangThai)) {
      return;
    }
    if (value) {
      this.lstTinhTrangFilter.push(trangThai);
    } else {
      this.lstTinhTrangFilter.splice(
        this.lstTinhTrangFilter.indexOf(trangThai),
        1
      );
    }
    this.loadDataTable(); // tải lại dữ liệu table
  }

  private getBuilder(builder: RequestQueryBuilder) {
    builder.select([
      'tenCongTrinh',
      'dienTich',
      'diaChi',
      'tienDo',
      'chuDauTu',
    ]);
    builder.setJoin([
      { field: 'diaChi' },
      { field: 'diaChi.quanHuyen', select: ['tenQuanHuyen'] },
      { field: 'diaChi.phuongXa', select: ['tenPhuongXa'] },
      { field: 'chuDauTu', select: ['tenChuDauTu'] },
      { field: 'tienDo', select: ['tenTienDo', 'maTienDo'] },
    ]);

    builder.setFilter({
      field: 'tienDo.maTienDo',
      operator: '$in',
      value: this.lstTinhTrangFilter.length ? this.lstTinhTrangFilter : ['ppp'],
    });

    if (this.entityFilter.diaChi.maQuanHuyen) {
      builder.setFilter({
        field: 'diaChi.maQuanHuyen',
        operator: '$eq',
        value: this.entityFilter.diaChi.maQuanHuyen,
      });
    }
    if (this.entityFilter.diaChi.maPhuongXa) {
      builder.setFilter({
        field: 'diaChi.maPhuongXa',
        operator: '$eq',
        value: this.entityFilter.diaChi.maPhuongXa,
      });
    }
    if (this.entityFilter.chuDauTu.maChuDauTu) {
      builder.setFilter({
        field: 'chuDauTu.maChuDauTu',
        operator: '$eq',
        value: this.entityFilter.chuDauTu.maChuDauTu,
      });
    }

    if (this.entityFilter.maCTXD) {
      builder.setFilter({
        field: 'maCTXD',
        operator: '$eq',
        value: this.entityFilter.maCTXD,
      });
    }
  }

  loadDataTable() {
    this.table.loadData();
  }

  clickRow(e) {
    if (e.type === 'dblclick') {
      const id = e.row.maCTXD;
      this.router.navigate([`../${id}`], { relativeTo: this.route });
    }
  }
}
