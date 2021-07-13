import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoaiCongTrinhXayDungService } from '@shared/services/cong-trinh-xay-dung/dm-loai-cong-trinh-xay-dung/dm-loai-cong-trinh-xay-dung.service';

@Component({
  selector: 'ga-loai-cong-trinh-cap-phep-xay-dung',
  templateUrl: './loai-cong-trinh-cap-phep-xay-dung.component.html',
  styleUrls: ['./loai-cong-trinh-cap-phep-xay-dung.component.scss'],
})
export class LoaiCongTrinhCapPhepXayDungComponent implements OnInit {
  private _required: boolean;
  public get required(): boolean {
    return this._required;
  }
  @Input() public set required(v: boolean) {
    if (v !== this._required) {
      if (v) {
        this.placeholder = this.placeholder += ' (*)';
      } else {
        this.placeholder = this.placeholder.replace(' (*)', '');
      }
    }
    this._required = v;
  }

  @Input()
  fullWidth = false;
  @Input() allValue = false;
  /**
   * @returns maChuDauTu
   */
  @Output() valueChange = new EventEmitter<string>();
  @Input() value: string;
  @Input() placeholder = 'Loại công trình';

  constructor(
    public loaiCongTrinhXayDungService: LoaiCongTrinhXayDungService
  ) {}

  ngOnInit() {}
}
