import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TinhTPService } from '@shared/services/hanh-chinh.service';
import { DnAutoCompleteComponent } from 'ditagis-nebular';
import { RequestQueryBuilder } from 'nest-crud-client';

@Component({
  selector: 'ga-tinh-tp',
  templateUrl: './tinh-tp.component.html',
  styleUrls: ['./tinh-tp.component.css'],
})
export class TinhTpComponent implements OnInit {
  @ViewChild('gaAuto') gaAuto: DnAutoCompleteComponent<any>;
  @Input() maTinhTP: string;
  @Input()
  fullWidth = false;
  /**
   * @returns maQuanHuyen
   */
  @Output() valueChange = new EventEmitter<string>();
  @Input() value: string;
  @Input() keepSearchText = false;
  @Input() disabled = false;
  @Input() allValue = false;
  @Input() fieldValue = 'maTinhTP';
  @Input() required = false;
  constructor(public service: TinhTPService) {}

  ngOnInit() {}
  xoaTrang() {
    this.gaAuto.xoaTimKiem();
  }

  builder = (qb: RequestQueryBuilder) => {
    qb.sortBy({ field: 'STT', order: 'ASC' });
  };
}
