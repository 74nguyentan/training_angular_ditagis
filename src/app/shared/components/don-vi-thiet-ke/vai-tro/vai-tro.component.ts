import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { VaiTroDonViNganhXDService } from '@shared/services/cong-trinh-xay-dung/cong-trinh-cpxd.service';
import { VaiTroDonViNganhXDEntity } from '@shared/services/cong-trinh-xay-dung/don-vi/don-vi-nganh-xay-dung.interface';
import { DnAutoCompleteComponent } from 'ditagis-nebular';

@Component({
  selector: 'ga-vai-tro',
  templateUrl: './vai-tro.component.html',
  styleUrls: ['./vai-tro.component.scss'],
})
export class VaiTroComponent implements OnInit {
  @ViewChild('gaAuto')
  gaAuto: DnAutoCompleteComponent<VaiTroDonViNganhXDEntity>;
  @Input() maVaiTro: string;
  @Input()
  fullWidth = false;
  /**
   * @returns maVaiTro
   */
  @Output() valueChange = new EventEmitter<string>();
  @Input() value: string;
  @Input() keepSearchText = false;
  @Input() disabled = false;
  @Input() allValue = false;
  constructor(public service: VaiTroDonViNganhXDService) {}

  ngOnInit() {}
  xoaTrang() {
    this.gaAuto.xoaTimKiem();
  }

  s(e) {
    this.valueChange.emit(e);
  }
}
