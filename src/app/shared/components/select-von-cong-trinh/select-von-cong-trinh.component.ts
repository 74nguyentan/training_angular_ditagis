import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoaiVonCongTrinhService } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/loai-von-cong-trinh.service';

@Component({
  selector: 'ga-select-von-cong-trinh',
  templateUrl: './select-von-cong-trinh.component.html',
  styleUrls: ['./select-von-cong-trinh.component.scss'],
})
export class SelectVonCongTrinhComponent implements OnInit {
  @Input()
  fullWidth = true;
  @Input() allValue = false;
  @Output() valueChange = new EventEmitter<string>();
  @Input() value: string;
  @Input() disabled = false;
  constructor(public loaiVonCongTrinhService: LoaiVonCongTrinhService) {}

  ngOnInit() {}
}
