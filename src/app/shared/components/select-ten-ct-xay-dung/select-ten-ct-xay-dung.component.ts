import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CongTrinhXayDungService } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.service';

@Component({
  selector: 'ga-select-ten-ct-xay-dung',
  templateUrl: './select-ten-ct-xay-dung.component.html',
  styleUrls: ['./select-ten-ct-xay-dung.component.css']
})
export class SelectTenCtXayDungComponent implements OnInit {

  @Input()
  fullWidth = false;
  @Input() allValue = false;
  /**
   * @returns maCTXD
   */
  @Output() valueChange = new EventEmitter<string>();
  @Input() value: string;
  @Input() disabled =  false;

  constructor(public congTrinhXayDungService:CongTrinhXayDungService) { }

  ngOnInit(): void {
  }

}
