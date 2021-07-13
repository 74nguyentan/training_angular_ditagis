import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThongTinCongTrinhCPXDService } from '@shared/services/cong-trinh-xay-dung/cong-trinh-cpxd.service';

@Component({
  selector: 'ga-select-ten-cong-trinh',
  templateUrl: './select-ten-cong-trinh.component.html',
  styleUrls: ['./select-ten-cong-trinh.component.css']
})
export class SelectTenCongTrinhComponent implements OnInit {

  @Input()
  fullWidth = false;
  @Input() allValue = false;
  /**
   * @returns maCTCPXD
   */
  @Output() valueChange = new EventEmitter<string>();
  @Input() value: string;
  @Input() disabled =  false;
  constructor(public service: ThongTinCongTrinhCPXDService) {}

  ngOnInit(): void {
  }

}
