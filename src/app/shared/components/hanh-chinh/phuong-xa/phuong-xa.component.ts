import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { PhuongXaEntity } from '@shared/interfaces/hanh-chinh/hanh-chinh-huyen.interface';
import { PhuongXaService } from '@shared/services/hanh-chinh.service';
import { DnAutoCompleteComponent } from 'ditagis-nebular';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';

@Component({
  selector: 'ga-phuong-xa',
  templateUrl: './phuong-xa.component.html',
  styleUrls: ['./phuong-xa.component.css'],
})
export class PhuongXaComponent implements OnInit {
  @ViewChild('ac', { static: false })
  ga: DnAutoCompleteComponent<PhuongXaEntity>;
  @Input()
  fullWidth = false;
  @Output() valueChange = new EventEmitter<string>();
  @Input() fieldValue = 'maPhuongXa';
  private _value: string | number | boolean;
  get value() {
    return this._value;
  }
  @Input() set value(v: string | number | boolean) {
    this._value = v;
  }
  @Input() allValue = false;

  private _maQuanHuyen: string;
  get maQuanHuyen(): string {
    return this._maQuanHuyen;
  }
  @Input() set maQuanHuyen(v: string) {
    this._maQuanHuyen = v;
    if (v === null || v === undefined) {
      this.valueChange.emit(null);
      this.ga && (this.ga.values = []);
    } else {
      this.ga &&
        this.ga.loadData().then((values) => {
          if (!values.some((s) => s.maPhuongXa === this.value)) {
            this.valueChange.emit(null);
          }
        });
    }
  }
  @Input() required = false;

  constructor(public service: PhuongXaService) {}

  ngOnInit(): void {}

  builder = (qb: RequestQueryBuilder) => {
    qb.setFilter({
      field: 'maQuanHuyen' as keyof PhuongXaEntity,
      operator: '$eq',
      value: this.maQuanHuyen ? this.maQuanHuyen : -999,
    });
  };
  xoaTrang() {
    this.ga.xoaTimKiem();
  }
}
