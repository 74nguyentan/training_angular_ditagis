import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { LichSuTienDoCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/lich-su-tien-do-cpxd.interface';
import { TienDoCPXDEnum } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/tien-do-cong-trinh-xay-dung.interface';
import moment from 'moment';
import { CrudBaseService, RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { isNullOrUndefined } from 'util';
export enum ThoiGianTienDoMode {
  Count,
  Date,
  DateTime,
}
@Component({
  selector: 'ga-thoi-gian-tien-do',
  templateUrl: './thoi-gian-tien-do.component.html',
  styleUrls: ['./thoi-gian-tien-do.component.scss'],
})
export class ThoiGianTienDoComponent implements OnInit, OnDestroy {
  private _maCTCPXD: string;
  get maCTCPXD(): string {
    return this._maCTCPXD;
  }
  @Input() set maCTCPXD(v: string) {
    if (this._maCTCPXD && v !== this._maCTCPXD) {
      this._maCTCPXD = v;
      this.loadData();
    } else this._maCTCPXD = v;
  }

  @Input() maTienDo: TienDoCPXDEnum;
  @Input() isTroNgai;
  @Input() layDateNhoNhat: boolean = false;
  @Input() lichSuTienDos: LichSuTienDoCPXDEntity[] = [];
  @Input() isColor = true;
  @Output() modeChange = new EventEmitter<ThoiGianTienDoMode>();
  private _mode: ThoiGianTienDoMode;
  public get mode(): ThoiGianTienDoMode {
    return this._mode;
  }
  @Input() public set mode(v: ThoiGianTienDoMode) {
    if (this.entity) {
      if (this.mode === ThoiGianTienDoMode.Count) {
        clearInterval(this.interval);
        delete this.interval;
        // delete this.color;
      }
      const diff = Math.abs(this.moment.diff(new Date(), 'days'));
      if (v === ThoiGianTienDoMode.Count) {
        if (diff === 0) {
          // nếu thời gian trong vòng 1 ngày thi chạy interval
          // vì sau một ngày thì chạy cũng bằng thừa
          this.interval = setInterval(
            () => (this.displayValue = this.moment.fromNow()),
            60 * 1000
          );
        }
        this.displayValue = this.moment.fromNow();
      }
      if (v === ThoiGianTienDoMode.Date) {
        this.displayValue = this.moment.format('DD-MM-yy');
      }
      if (v === ThoiGianTienDoMode.DateTime) {
        this.displayValue = this.moment.format('hh:mm DD-MM-yy');
      }
      if (this.isColor) {
        if (diff === 0) {
          this.color = '#2ed573';
        } else if (diff <= 1) {
          this.color = '#FFC312';
        } else if (diff <= 2) {
          this.color = '#f39c12';
        } else {
          this.color = '#eb2f06';
        }
      }
    }
    this._mode = v;
    this.modeChange.emit(v);
  }

  entity: LichSuTienDoCPXDEntity;
  displayValue = '';
  color = '';
  interval;
  moment: moment.Moment;
  constructor(
    @Optional()
    public service: CrudBaseService<LichSuTienDoCPXDEntity>
  ) {}

  @HostListener('click')
  click() {
    const length = Object.keys(ThoiGianTienDoMode).length / 2;

    if (this.mode === length - 1) {
      this.mode = 0;
    } else {
      this.mode++;
    }
  }

  async ngOnInit() {
    this.loadData();
  }

  private async loadData() {
    let lsEntity: LichSuTienDoCPXDEntity;
    if (this.lichSuTienDos && this.lichSuTienDos.length) {
      const lstTienDo = this.maTienDo
        ? this.lichSuTienDos.filter((f) => f.maTienDo === this.maTienDo)
        : this.lichSuTienDos;

      if (this.layDateNhoNhat) {
        lsEntity = lstTienDo.reduce(
          (t, v) => (v.thoiGian.valueOf() < t.thoiGian.valueOf() ? v : t),
          lstTienDo[0]
        );
      } else {
        lsEntity = lstTienDo.reduce(
          (t, v) => (v.thoiGian.valueOf() > t.thoiGian.valueOf() ? v : t),
          lstTienDo[0]
        );
      }
    } else {
      const qb = RequestQueryBuilder.create();
      if (!isNullOrUndefined(this.isTroNgai)) {
        qb.setFilter({
          field: 'isTroNgai',
          operator: '$eq',
          value: this.isTroNgai,
        });
      }
      [lsEntity] = await this.service.getMany(this.getBuilder(qb)).toPromise();
    }
    if (lsEntity) {
      this.entity = lsEntity;
      this.moment = moment(this.entity.thoiGian);
      this.mode = this.mode || ThoiGianTienDoMode.Count;
    }
  }

  protected getBuilder(builder: RequestQueryBuilder) {
    builder.select(['thoiGian', 'isTroNgai'] as Array<
      keyof LichSuTienDoCPXDEntity
    >);
    builder.setJoin([{ field: 'user', select: ['displayName'] }]);
    builder.sortBy([{ field: 'thoiGian', order: 'DESC' }]);
    return builder;
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
