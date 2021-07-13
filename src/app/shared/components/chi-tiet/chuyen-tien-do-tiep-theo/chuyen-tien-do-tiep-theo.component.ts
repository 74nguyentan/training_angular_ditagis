import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { TienDoTDCSEnum } from '@shared/services/cong-trinh-xay-dung/tham-dinh-co-so/tien-do/tien-do.interface';
import { ILichSuTienDoChuyenTienDoTiepTheo } from './chuyen-tien-do-tiep-theo.interface';

@Component({
  selector: 'ga-share-chuyen-tien-do-tiep-theo',
  templateUrl: './chuyen-tien-do-tiep-theo.component.html',
  styleUrls: ['./chuyen-tien-do-tiep-theo.component.scss'],
})
export class ShareChuyenTienDoTiepTheoComponent implements OnInit {
  @Input() disabled: boolean;
  @Input() id: string;
  @Input() idKey: string;
  @Input() maTienDoChuyen: TienDoTDCSEnum;
  @Output() chuyenBuocClick = new EventEmitter();
  @Input() lstdService: ILichSuTienDoChuyenTienDoTiepTheo;
  status = { saving: false };
  constructor(private toast: NbToastrService) {}

  ngOnInit() {}
  async chuyenBuoc() {
    if (this.id) {
      this.status.saving = true;

      try {
        await this.lstdService
          .create({
            [this.idKey]: this.id,
            maTienDo: this.maTienDoChuyen,
          })
          .toPromise();
        this.status.saving = false;

        this.toast.success('Đã chuyển hồ sơ sang bước tiếp theo', 'Thành công');
        this.chuyenBuocClick.emit();
      } catch (e) {
        this.status.saving = false;

        this.toast.danger(e);
      }
    }
  }
}
