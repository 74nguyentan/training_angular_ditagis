import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { QuanHuyenEntity } from '@shared/interfaces/hanh-chinh/hanh-chinh-huyen.interface';
import { QuanHuyenService } from '@shared/services/hanh-chinh.service';
import { DnAutoCompleteComponent } from 'ditagis-nebular';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';

@Component({
  selector: 'ga-quan-huyen',
  templateUrl: './quan-huyen.component.html',
  styleUrls: ['./quan-huyen.component.css'],
})
export class QuanHuyenComponent implements OnInit {
  @ViewChild('ac', { static: false })
  ga: DnAutoCompleteComponent<QuanHuyenEntity>;
  @Input()
  fullWidth = false;
  @Input() fieldValue = 'maQuanHuyen';
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

  private _maTinhTP: string;
  get maTinhTP(): string {
    return this._maTinhTP;
  }
  @Input() set maTinhTP(v: string) {
    this._maTinhTP = v;
    if (v === null || v === undefined) {
      this.valueChange.emit(null);
      this.ga && (this.ga.values = []);
    } else {
      this.ga &&
        this.ga.loadData().then((values) => {
          if (!values.some((s) => s.maQuanHuyen === this.value)) {
            this.valueChange.emit(null);
          }
        });
    }
  }
  @Input() required = false;

  constructor(public service: QuanHuyenService) {}

  ngOnInit(): void {}

  builder = (qb: RequestQueryBuilder) => {
    if (this.maTinhTP) {
      qb.setFilter({
        field: 'maTinhTP' as keyof QuanHuyenEntity,
        operator: '$eq',
        value: this.maTinhTP,
      });
    }
  };
  xoaTrang() {
    this.ga.xoaTimKiem();
  }
}
