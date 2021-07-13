import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ChiTietDonViThietKeCongTrinhEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/chi-tiet-don-vi-tkct.interface';
import { DonViNganhXayDungService } from '@shared/services/cong-trinh-xay-dung/cong-trinh-cpxd.service';
import { DnAutoCompleteComponent } from 'ditagis-nebular';

@Component({
  selector: 'ga-don-vi',
  templateUrl: './don-vi.component.html',
  styleUrls: ['./don-vi.component.scss'],
})
export class DonViComponent implements OnInit {
  @ViewChild('ac', { static: false })
  ga: DnAutoCompleteComponent<ChiTietDonViThietKeCongTrinhEntity>;
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

  constructor(public service: DonViNganhXayDungService) {}

  ngOnInit(): void {}

  xoaTrang() {
    this.ga.xoaTimKiem();
  }
}
