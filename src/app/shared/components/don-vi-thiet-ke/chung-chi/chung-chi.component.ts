import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { ChungChiDonViXayDungEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/don-vi-nganh-xay-dung/chung-chi-dvxd.interface';
import { ChungChiDonViXayDungService } from '@shared/services/cong-trinh-xay-dung/cong-trinh-cpxd.service';
import { DnAutoCompleteComponent } from 'ditagis-nebular';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';

@Component({
  selector: 'ga-chung-chi',
  templateUrl: './chung-chi.component.html',
  styleUrls: ['./chung-chi.component.scss'],
})
export class ChungChiComponent implements OnInit {
  @ViewChild('ac', { static: false })
  ga: DnAutoCompleteComponent<ChungChiDonViXayDungEntity>;
  newChungChi: ChungChiDonViXayDungEntity = {};
  @Input() isAdd = false;
  @Input() disabled = false;
  @Input()
  fullWidth = false;
  /**
   * @returns maQuanHuyen
   */
  @Output() valueChange = new EventEmitter<string>();

  private _value: string | number | boolean;
  get value() {
    return this._value;
  }
  @Input() set value(v: string | number | boolean) {
    this._value = v;
  }
  @Input() allValue = false;

  private _maDonVi: string;
  get maDonVi(): string {
    return this._maDonVi;
  }
  @Input() set maDonVi(v: string) {
    this._maDonVi = v;
    if (v === null || v === undefined) {
      this.valueChange.emit(null);
      this.ga && (this.ga.values = []);
    } else {
      this.ga &&
        this.ga.loadData().then((values) => {
          if (!values.some((s) => s.maChungChi === this.value)) {
            this.valueChange.emit(null);
          }
        });
    }
    this.newChungChi.maDonVi = this.maDonVi;
  }

  constructor(
    public service: ChungChiDonViXayDungService,
    private toast: NbToastrService
  ) {}

  ngOnInit() {}

  builder = (qb: RequestQueryBuilder) => {
    if (this.maDonVi) {
      qb.setFilter({
        field: 'maDonVi' as keyof ChungChiDonViXayDungEntity,
        operator: '$eq',
        value: this.maDonVi,
      });
    }
  };
  xoaTrang() {
    this.ga.xoaTimKiem();
  }
  themMoiChungChi = async () => {
    let chungChi: ChungChiDonViXayDungEntity = {};
    try {
      if (this.checkValidChungChi()) {
        chungChi = await this.service.create(this.newChungChi).toPromise();
      }
    } catch (e) {
      this.toast.danger(e);
    }
    return chungChi;
  };
  checkValidChungChi() {
    if (!this.newChungChi.maDonVi) {
      throw new Error('Vui lòng chọn đơn vị');
    }
    if (!this.newChungChi.chungChiHanhNghe) {
      throw new Error('Vui lòng nhập chứng chỉ hành nghề');
    }
    if (!this.newChungChi.ngayCap) {
      throw new Error('Vui lòng chọn ngày cấp');
    }
    if (!this.newChungChi.so) {
      throw new Error('Vui lòng nhập số chứng chỉ');
    }
    if (!this.newChungChi.noiCap) {
      throw new Error('Vui lòng nhập nơi cấp');
    }
    return true;
  }
}
