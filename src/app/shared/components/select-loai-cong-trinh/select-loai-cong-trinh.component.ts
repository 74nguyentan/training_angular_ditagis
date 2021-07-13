import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DMLoaiCongTrinhService } from '@shared/services/cong-trinh-xay-dung/dm-loai-cong-trinh/dm-loai-cong-trinh.service';

@Component({
  selector: 'ga-select-loai-cong-trinh',
  templateUrl: './select-loai-cong-trinh.component.html',
  styleUrls: ['./select-loai-cong-trinh.component.scss'],
})
export class SelectLoaiCongTrinhComponent implements OnInit {
  @Input()
  fullWidth = false;
  @Input() allValue = false;
  /**
   * @returns maChuDauTu
   */
  @Output() valueChange = new EventEmitter<string>();
  @Input() value: string;
  @Input() placeholder = 'Loại công trình';
  constructor(public service: DMLoaiCongTrinhService) {}

  ngOnInit() {}
}
