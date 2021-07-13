import { Component, Input, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { QuanLyTepEntity } from '@shared/interfaces/tep-chia-se.interface';
import { VanBanCTXDService } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.service';
import { VanBanCTXDEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/van-ban-ctxd.interface';

@Component({
  selector: 'ga-van-ban-ct',
  templateUrl: './van-ban.component.html',
  styleUrls: ['./van-ban.component.scss'],
})
export class VanBanComponent implements OnInit {
  @Input() maCTXD: string;
  @Input() isAdd = true;
  @Input() title = 'Văn bản';
  isShowAddDoc = false;
  lstVanBanCTXD: VanBanCTXDEntity[] = [];
  isShowReqDel = false;
  idDelete: string;
  constructor(
    private toast: NbToastrService,
    private vanBanCTXDService: VanBanCTXDService
  ) {}

  ngOnInit() {
    this.getDataVanBan();
  }
  xemVanBan(item: QuanLyTepEntity) {
    if (item) {
      this.moTep(item.webViewLink);
    } else {
      this.toast.danger('Chưa có tệp đính kèm');
    }
  }
  moTep(url: string) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.click();
  }
  alertDelVanBan(id) {
    this.isShowReqDel = true;
    this.idDelete = id;
  }
  xoaVanBan() {
    if (this.idDelete) {
      this.vanBanCTXDService.delete(this.idDelete).subscribe({
        next: () => {
          this.toast.success('Đã xóa', 'Thành công');
          this.isShowReqDel = false;
          // cập nhật lại dữ liệu
          const index = this.lstVanBanCTXD.findIndex(
            (f) => f.id === this.idDelete
          );
          if (index > -1) {
            const newData = [...this.lstVanBanCTXD];
            newData.splice(index, 1);
            this.lstVanBanCTXD = newData;
          }
        },
        error: (err) => {
          this.toast.danger(err);
        },
      });
    }
  }
  closeDialogVanBan() {
    this.isShowAddDoc = false;
    this.getDataVanBan();
  }
  getDataVanBan() {
    this.vanBanCTXDService
      .getMany({
        join: [{ field: 'vanBan' }, { field: 'vanBan.file' }],
        filter: [{ field: 'maCTXD', operator: '$eq', value: this.maCTXD }],
      })
      .subscribe((s) => (this.lstVanBanCTXD = s));
  }
}
