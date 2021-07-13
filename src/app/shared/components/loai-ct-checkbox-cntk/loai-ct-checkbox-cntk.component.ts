import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GroupChucNang } from '@shared/services/phan-quyen/chuc-nang.interface';

@Component({
  selector: 'ga-loai-ct-cntt-checkbox',
  templateUrl: './loai-ct-checkbox-cntk.component.html',
  styleUrls: ['./loai-ct-checkbox-cntk.component.scss'],
})
export class LoaiCTCNTTCheckboxComponent implements OnInit {
  @Output() checkedsChange = new EventEmitter<number[]>();
  @Input() checkeds: number[] = [];
  values = [
    { ma: GroupChucNang.CPXD, ten: 'Cấp phép xây dựng' },
    { ma: GroupChucNang.TKCS, ten: 'Thiết kế cơ sở' },
    { ma: GroupChucNang.TDXD, ten: 'Thẩm định xây dựng' },
  ];

  constructor() {}

  ngOnInit() {}
  getLoaiCTCNTTClass(ma: number) {
    return `m${ma}`;
  }
  checkedChangeHandle(ma: number, checked: boolean) {
    if (checked) {
      this.checkeds.push(ma);
    } else {
      this.checkeds.splice(this.checkeds.indexOf(ma), 1);
    }
    this.checkedsChange.emit(this.checkeds);
  }
}
