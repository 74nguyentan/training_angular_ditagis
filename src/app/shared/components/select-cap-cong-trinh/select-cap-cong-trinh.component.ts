import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CapCongTrinhService } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.service';

@Component({
  selector: 'ga-select-cap-cong-trinh',
  templateUrl: './select-cap-cong-trinh.component.html',
  styleUrls: ['./select-cap-cong-trinh.component.scss']
})
export class SelectCapCongTrinhComponent implements OnInit {
  @Input()
  fullWidth = false;
  @Input() allValue = false;
  /**
   * @returns maChuDauTu
   */
  @Output() valueChange = new EventEmitter<string>();
  @Input() value: string;
  constructor(public service:CapCongTrinhService) { }

  ngOnInit() {
  }

}
