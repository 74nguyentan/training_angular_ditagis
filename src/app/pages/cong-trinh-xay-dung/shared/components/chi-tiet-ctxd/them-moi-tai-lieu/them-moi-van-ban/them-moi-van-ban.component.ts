import { Component, Input, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import {
  FileTypeEnum,
  QuanLyTepEntity,
} from '@shared/interfaces/tep-chia-se.interface';
import {
  LoaiVanBanCTXDService,
  VanBanCTXDService,
} from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.service';
import { LoaiVanBanCTXDEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/loai-van-ban-ctxd.interface';
import { VanBanCTXDEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/van-ban-ctxd.interface';

@Component({
  selector: 'ga-them-moi-van-ban',
  templateUrl: './them-moi-van-ban.component.html',
  styleUrls: ['./them-moi-van-ban.component.scss'],
})
export class ThemMoiVanBanComponent implements OnInit {
  @Input() id: string;
  lstLoaiVanBanCTXD: LoaiVanBanCTXDEntity[] = [];
  tenTepDuocChon: string;
  newVanBanCTXD: VanBanCTXDEntity = {
    vanBan: {},
  };
  status = {
    disableInput: false,
    saving: false,
  };
  fileTypeSelect: FileTypeEnum;
  constructor(
    private loaiVanBanCTXDService: LoaiVanBanCTXDService,
    private vanBanCTXDService: VanBanCTXDService,
    private toast: NbToastrService
  ) {}

  ngOnInit() {
    if (this.id) {
      this.newVanBanCTXD.maCTXD = this.id;
      this.status.disableInput = true;
      this.fileTypeSelect = FileTypeEnum.VanBan;
    }
    this.loaiVanBanCTXDService
      .getMany()
      .subscribe((s) => (this.lstLoaiVanBanCTXD = s));
  }
  selectedFile(e: QuanLyTepEntity) {
    if (e) {
      this.tenTepDuocChon = e.name;
      this.newVanBanCTXD.vanBan.fileId = e.id;
    }
  }
  themMoiVanBan() {
    try {
      if (this.checkValid()) {
        this.vanBanCTXDService.create(this.newVanBanCTXD).subscribe({
          next: () => {
            this.toast.success('Thêm mới thành công', 'Thành công');
            this.xoaTrang();
          },
          error: () => {
            this.toast.danger('Không thể thêm mới', 'Thất bại');
          },
        });
      }
    } catch (e) {
      this.toast.danger(e);
    }
  }
  xoaTrang() {
    this.newVanBanCTXD.maLoaiVanBan = undefined;
    this.newVanBanCTXD.vanBan = {};
    this.tenTepDuocChon = '';
  }
  checkValid() {
    if (!this.newVanBanCTXD.maCTXD) {
      this.toast.warning('Vui lòng chọn tên công trình xây dựng');
    }
    if (!this.newVanBanCTXD.vanBan.tenVanBan) {
      throw new Error('Vui lòng nhập tên văn bản');
    }
    if (!this.newVanBanCTXD.vanBan.soVanBan) {
      throw new Error('Vui lòng nhập số văn bản');
    }
    if (!this.newVanBanCTXD.vanBan.ngayPhatHanh) {
      throw new Error('Vui lòng nhập ngày phát hành');
    }
    if (!this.newVanBanCTXD.maLoaiVanBan) {
      throw new Error('Vui lòng chọn loại văn bản');
    }
    if (!this.newVanBanCTXD.vanBan.noiDung) {
      throw new Error('Vui lòng nhập nội dung');
    }
    if (!this.newVanBanCTXD.vanBan.fileId) {
      throw new Error('Chọn tệp đính kèm');
    }
    return true;
  }
}
