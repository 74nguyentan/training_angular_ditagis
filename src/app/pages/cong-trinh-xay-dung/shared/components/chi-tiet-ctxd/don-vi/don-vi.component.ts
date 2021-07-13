import { Component, Input, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { ChiTietDonViThietKeCongTrinhEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/chi-tiet-don-vi-tkct.interface';
import { ChiTietDonViThietKeCongTrinhXDService } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.service';
import { isNullOrUndefined } from 'ngn-datatable';

@Component({
  selector: 'ct-don-vi',
  templateUrl: './don-vi.component.html',
  styleUrls: ['./don-vi.component.scss'],
})
export class DonViComponent implements OnInit {
  @Input() isEdit = false;
  @Input() maCTXD: string;
  lstChiTietDonVi: Array<
    ChiTietDonViThietKeCongTrinhEntity & { isValid: boolean }
  > = [
    {
      isValid: false,
    },
  ];
  constructor(
    private chiTietDonViTKCTXDService: ChiTietDonViThietKeCongTrinhXDService,
    private toast: NbToastrService
  ) {}

  ngOnInit() {
    if (this.maCTXD) {
      this.chiTietDonViTKCTXDService
        .getMany({
          filter: [{ field: 'maCTXD', operator: '$eq', value: this.maCTXD }],
        })
        .subscribe((s) => {
          if (s.length) {
            let value: ChiTietDonViThietKeCongTrinhEntity & {
              isValid: boolean;
            } = { isValid: true };
            let newData: Array<
              ChiTietDonViThietKeCongTrinhEntity & { isValid: boolean }
            > = [];
            s.forEach((dv) => {
              Object.assign(value, dv);
              newData.push(value);
              this.lstChiTietDonVi = newData;
            });
          }
        });
    }
  }
  changValueChiTietDonVi(index: number, id?: string) {
    const item = this.lstChiTietDonVi[index];
    if (
      !isNullOrUndefined(item.maDonVi) &&
      !isNullOrUndefined(item.maVaiTroDV) &&
      !isNullOrUndefined(item.maChungChi)
    ) {
      if (id) {
        // nếu có id nghĩa là đang cập nhật
        // gọi service cập nhật
        this.chiTietDonViTKCTXDService
          .patch(id, {
            maCTXD: this.maCTXD,
            maDonVi: item.maDonVi,
            maChungChi: item.maChungChi,
            maVaiTroDV: item.maVaiTroDV,
          })
          .subscribe({
            next: () => {
              this.toast.success('Cập nhật thành công');
            },
            error: (e) => {
              this.toast.danger(e, 'Lỗi');
            },
          });
      } else {
        // nếu không có id nghĩa là thêm mới
        // gọi service thêm
        this.chiTietDonViTKCTXDService
          .create({
            maCTXD: this.maCTXD,
            maDonVi: item.maDonVi,
            maChungChi: item.maChungChi,
            maVaiTroDV: item.maVaiTroDV,
          })
          .subscribe({
            next: () => {
              this.toast.success('Thêm mới thành công');
            },
            error: (e) => {
              this.toast.danger(e, 'Lỗi');
            },
          });
      }
      item.isValid = true;
      if (index === this.lstChiTietDonVi.length - 1) {
        this.lstChiTietDonVi.push({ isValid: false });
      }
    } else {
      item.isValid = false;
    }
  }
  deleteChiTietDonVi(index: number, id: string) {
    if (this.lstChiTietDonVi.length < 2) {
      return;
    }
    if (id) {
      //xóa
      this.chiTietDonViTKCTXDService.delete(id).subscribe({
        next: () => {
          this.toast.success('Xóa thành công');
        },
        error: (e) => {
          this.toast.danger(e, 'Lỗi');
        },
      });
    }
    this.lstChiTietDonVi.splice(index, 1);
  }
}
