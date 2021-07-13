import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbPopoverDirective, NbToastrService } from '@nebular/theme';
import { ChuDauTuEntity } from '@shared/interfaces/chu-dau-tu.interface';
import { ChuDauTuService } from '@shared/services/chu-dau-tu.service';
import {
  CapCongTrinhService,
  CongTrinhXayDungService,
  TienDoCTXDService,
} from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.service';
import { CongTrinhXayDungEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/cong-trinh-xay-dung.interface';
import { TienDoCTXDEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/tien-do-ctxd.interface';
import { LoaiCongTrinhXayDungService } from '@shared/services/cong-trinh-xay-dung/dm-loai-cong-trinh-xay-dung/dm-loai-cong-trinh-xay-dung.service';
import { DiaChiService } from '@shared/services/dia-chi.service';

@Component({
  selector: 'ga-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.css'],
})
export class ChiTietComponent implements OnInit {
  @ViewChild(NbPopoverDirective, { static: true }) popover: NbPopoverDirective;
  maChuDauTu: string;
  maCTXD: string;
  maTienDo: string;
  congTrinhXayDung: CongTrinhXayDungEntity;
  lstCongTrinhXayDung: CongTrinhXayDungEntity[] = [];
  lstChuDauTu: ChuDauTuEntity[] = [];
  chuDauTu: ChuDauTuEntity = {};
  lstTienDo: TienDoCTXDEntity[] = [];
  lstCTXD: Array<CongTrinhXayDungEntity & { isValid: boolean }> = [
    {
      isValid: false,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private toast: NbToastrService,
    public loaiCongTrinhXayDungService: LoaiCongTrinhXayDungService,
    public capCongTrinhService: CapCongTrinhService,
    private congTrinhXayDungService: CongTrinhXayDungService,
    private chuDauTuService: ChuDauTuService,
    private tienDoCTXDSerive: TienDoCTXDService,
    public diaChiService: DiaChiService
  ) {}

  async ngOnInit() {
    this.congTrinhXayDungService
      .getMany()
      .subscribe((v) => (this.lstCongTrinhXayDung = v));
    this.tienDoCTXDSerive
      .getMany({ fields: ['tenTienDo', 'maTienDo'] })
      .subscribe((t) => (this.lstTienDo = t));
    this.chuDauTuService
      .getMany({ fields: ['maChuDauTu', 'tenChuDauTu'] })
      .subscribe((k) => (this.lstChuDauTu = k));
    /**
     * nhận id từ trang danh sách
     */
    this.route.paramMap.subscribe((param) => {
      this.maCTXD = param.get('id');
    });
    await this.getDataCTXD();
  }

  getDataCTXD() {
    return this.congTrinhXayDungService
      .getOne(this.maCTXD, {
        fields: [
          'maCTXD',
          'tenCongTrinh',
          'chuDauTu',
          'dienTich',
          'maTienDo',
          'maChuDauTu',
        ],
        join: [
          { field: 'diaChi' },
          { field: 'diaChi.tinhTP', select: ['tenTinhTP'] },
          { field: 'diaChi.quanHuyen', select: ['tenQuanHuyen'] },
          { field: 'diaChi.phuongXa', select: ['tenPhuongXa'] },
          {
            field: 'chuDauTu',
            select: [
              'tenChuDauTu',
              'nguoiDaiDien',
              'chucVu',
              'soDienThoai',
              'maChuDauTu',
            ],
          },
          { field: 'tienDo', select: ['maTienDo', 'tenTienDo'] },
        ],
      })
      .toPromise()
      .then((s) => {
        this.congTrinhXayDung = s;
        this.maChuDauTu = s.maChuDauTu;
        this.chuDauTu = s.chuDauTu;
        this.maTienDo = s.maTienDo;
      });
  }

  onSelectedChange(maChuDauTu) {
    this.congTrinhXayDungService.patch(this.maCTXD, { maChuDauTu }).subscribe();
  }
  onChange(maTienDo) {
    this.congTrinhXayDungService.patch(this.maCTXD, { maTienDo }).subscribe();
  }
  fieldEdit = {
    chucVu: false,
    nguoiDaiDien: false,
    diaChiLienHe: false,
    soDienThoai: false,
  };
  valueEdit = {
    chucVu: '',
    nguoiDaiDien: '',
    diaChiLienHe: '',
    soDienThoai: '',
  };

  capNhatGiaTri() {
    if (this.kiemTraTonTai()) {
      const tt = this.chuDauTu;
      if (this.valueEdit.chucVu && this.valueEdit.chucVu !== tt.chucVu) {
        this.chuDauTuService
          .patch(this.maChuDauTu, { chucVu: this.valueEdit.chucVu })
          .subscribe({
            next: () => {
              tt.chucVu = this.valueEdit.chucVu;
              this.toast.success('Cập nhật thành công');
            },
            error: (err) => {
              this.toast.danger(err);
            },
          });
      } else if (
        this.valueEdit.nguoiDaiDien &&
        this.valueEdit.nguoiDaiDien !== tt.nguoiDaiDien
      ) {
        this.chuDauTuService
          .patch(this.maChuDauTu, { nguoiDaiDien: this.valueEdit.nguoiDaiDien })
          .subscribe({
            next: () => {
              tt.nguoiDaiDien = this.valueEdit.nguoiDaiDien;
              this.toast.success('Cập nhật thành công');
            },
            error: (err) => {
              this.toast.danger(err);
            },
          });
      } else if (
        this.valueEdit.soDienThoai &&
        this.valueEdit.soDienThoai !== tt.soDienThoai
      ) {
        this.chuDauTuService
          .patch(this.maChuDauTu, { soDienThoai: this.valueEdit.soDienThoai })
          .subscribe({
            next: () => {
              tt.soDienThoai = this.valueEdit.soDienThoai;
              this.toast.success('Cập nhật thành công');
            },
            error: (err) => {
              this.toast.danger(err);
            },
          });
      }
      this.fieldEdit = {
        chucVu: false,
        nguoiDaiDien: false,
        diaChiLienHe: false,
        soDienThoai: false,
      };
    }
  }

  kiemTraTonTai() {
    if (!this.maChuDauTu) {
      this.toast.danger('Không xác định được mã chủ đầu tư');
      throw new Error('Không xác định được mã chủ đầu tư');
    }
    return true;
  }
  thongTin() {
    this.fieldEdit = {
      chucVu: true,
      nguoiDaiDien: true,
      diaChiLienHe: true,
      soDienThoai: true,
    };
  }
}
