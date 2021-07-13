import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoaiCongTrinhCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/loai-cong-trinh/loai-cong-trinh.interface';
import { LoaiCongTrinhCPXDService } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/loai-cong-trinh/loai-cong-trinh.service';

@Component({
  selector: 'ga-bo-loc-loai-ct',
  templateUrl: './bo-loc-loai-ct.component.html',
  styleUrls: ['./bo-loc-loai-ct.component.scss'],
})
export class BoLocLoaiCtComponent implements OnInit {
  @Output() checkedsChange = new EventEmitter<LoaiCongTrinhCPXDEntity[]>();
  @Input() checkeds: LoaiCongTrinhCPXDEntity[] = [];

  private _isCheckAll: boolean;
  public get isCheckAll(): boolean {
    return this._isCheckAll;
  }

  /**
   * Checkall theo nhu cau
   *
   */
  @Input() public set isCheckAll(e: boolean) {
    // neu gia tri check all thay doi
    if (this._isCheckAll !== e) {
      this._isCheckAll = e;
      this.loadCheckAll();
    }
  }

  loadCheckAll() {
    let checkeds = [];
    if (this.isCheckAll) {
      // khi lstLoaiCongTrinh chua duoc load thi lstLoaiCongTrinh = [] => checkeds cung bang []
      // phai cho lstLoaiCongTrinh co gia tri thi load lai
      for (let loaiCongTrinh of this.lstLoaiCongTrinh) {
        checkeds.push(loaiCongTrinh.maLoai);
      }
    } else {
      checkeds = [];
    }

    // thong bao co su thay doi checkeds
    this.checkedsChange.emit(checkeds);
  }

  isCheckedTinhTrangFilter(trangThai: LoaiCongTrinhCPXDEntity) {
    return this.checkeds.indexOf(trangThai) > -1;
  }
  // slTheoTinhTrang = {};
  lstLoaiCongTrinh: LoaiCongTrinhCPXDEntity[] = [];
  constructor(private loaiCongTrinhCPXDService: LoaiCongTrinhCPXDService) {}

  async ngOnInit() {
    this.lstLoaiCongTrinh = await this.loaiCongTrinhCPXDService
      .getMany({ fields: ['tenLoai', 'maLoai'] })
      .toPromise();
    // goi lai phuong thuc loadCheckall sau khi load xong lstLoaiCongTrinh
    // vi khi nguoi dung set [isCheckAll]="true" khi do lstLoaiCongTrinh chua load xong nen checkAll khong co tac dung
    this.loadCheckAll();
  }

  thayDoiTrangThaiFilter(trangThai: LoaiCongTrinhCPXDEntity, value: boolean) {
    if (value && this.isCheckedTinhTrangFilter(trangThai)) {
      return;
    }
    if (!value && !this.isCheckedTinhTrangFilter(trangThai)) {
      return;
    }
    // sao chep mang
    let checkeds = [...this.checkeds];
    if (value) {
      checkeds.push(trangThai);
    } else {
      checkeds.splice(checkeds.indexOf(trangThai), 1);
    }
    // thong bao co su thay doi checkeds
    this.checkedsChange.emit(checkeds);
  }
}
