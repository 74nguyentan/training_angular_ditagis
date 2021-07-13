import { Component, Input, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { LoaiHinhAnhCTXDEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/loai-hinh-anh.interface';
import {
  FileTypeEnum,
  QuanLyTepEntity,
} from '../../../../../../shared/interfaces/tep-chia-se.interface';
import {
  HinhAnhCTXDService,
  LoaiHinhAnhCTXDService,
} from '../../../../../../shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.service';
import { HinhAnhCTXDEntity } from '../../../../../../shared/services/cong-trinh-xay-dung/cong-trinh-xd/hinh-anh-ctxd.interface';

@Component({
  selector: 'ga-hinh-anh',
  templateUrl: './hinh-anh.component.html',
  styleUrls: ['./hinh-anh.component.css'],
})
export class HinhAnhComponent implements OnInit {
  @Input() maCTXD: string;
  lstLoaiHinhAnh: LoaiHinhAnhCTXDEntity[] = [];
  lstHinhAnh: HinhAnhCTXDEntity[] = [];
  status = {
    isLoading: true,
    isLoadingSpinner: false,
    isShowBtn: false,
    loadingAddImage: false,
  };
  isOpenThemHinhAnh: boolean = false; // mở dialog thêm hình ảnh
  tabId: string; // tab id của tabset loại hình ảnh
  limit: number = 8; // giới hạn hình ảnh trong 1 lần get
  indexPage: number = 1;
  pageCount: number; // Tổng số lần có thể lấy dữ liệu hình ảnh
  currentPage: number;
  label: string = 'Xem thêm'; // Hiển thị label nút xem thêm hình ảnh
  // dữ liệu hình ảnh khi thêm mới
  addImageValue: HinhAnhCTXDEntity = {
    maLoaiHinhAnh: '',
    file: {
      name: '',
    },
  };
  tenHinhAnh: string = '';
  // loại hình ảnh
  addLoaiHinhAnh: LoaiHinhAnhCTXDEntity = {};
  // loại file khi get
  fileTypeSelect: FileTypeEnum = FileTypeEnum.HinhAnh;
  constructor(
    public loaiHinhAnhCTXDService: LoaiHinhAnhCTXDService,
    private hinhAnhCTXDService: HinhAnhCTXDService,
    private toast: NbToastrService
  ) {}

  ngOnInit() {
    this.loaiHinhAnhCTXDService
      .getMany()
      .subscribe((value) => (this.lstLoaiHinhAnh = value));
  }
  onChangeTab(value: { tabId: string }) {
    this.status.isShowBtn = false;
    this.indexPage = 1;
    this.status.isLoading = true;
    this.tabId = value.tabId;
    this.getImage(this.indexPage).subscribe(
      (images) => {
        // Nếu trang hiện tại < tổng số trang thì hien thi nút xem thêm
        if (images.page < images.pageCount) this.status.isShowBtn = true;
        this.pageCount = images.pageCount;
        this.currentPage = images.page;
        this.lstHinhAnh = images.data;
        this.status.isLoading = false;
      },
      (err) => {
        this.toast.danger(JSON.stringify(err));
        this.status.isLoading = false;
      },
      () => {
        this.status.isLoading = false;
      }
    );
  }

  xemThemHinhAnh() {
    if (this.pageCount > this.currentPage) {
      this.status.isShowBtn = false;
      this.label = '';
      this.status.isLoadingSpinner = true;
      this.getImage(this.indexPage + 1).subscribe((value) => {
        // Nếu trang hiện tại < tổng số trang thì hien thi nút xem thêm
        if (value.page < value.pageCount) this.status.isShowBtn = true;
        this.lstHinhAnh = this.lstHinhAnh.concat(value.data);
        this.currentPage = value.page;
        this.status.isLoadingSpinner = false;
        this.status.isLoading = false;
        this.label = 'Xem thêm';
        this.indexPage += 1;
      });
    }
  }

  getImage(indexPage: number) {
    return this.hinhAnhCTXDService.getPagination(this.limit, indexPage, {
      filter: [
        { field: 'maLoaiHinhAnh', operator: '$eq', value: this.tabId },
        { field: 'maCTXD', operator: '$eq', value: this.maCTXD },
      ],
      join: [
        {
          field: 'file',
          select: ['webContentLink'] as Array<keyof QuanLyTepEntity>,
        },
      ],
    });
  }
  themMoi() {
    try {
      if (this.checkValidHinhAnh()) {
        this.status.loadingAddImage = true;
        if (!this.addImageValue.file.name)
          this.addImageValue.file.name = this.tenHinhAnh;
        this.addImageValue.maCTXD = this.maCTXD;
        this.hinhAnhCTXDService
          .create(this.addImageValue)
          .subscribe((value) => {
            this.toast.success('Thêm hình ảnh thành công');
            this.status.loadingAddImage = false;
          });
      }
    } catch (err) {
      this.status.loadingAddImage = false;
      throw new Error(err);
    }
  }
  xoaThongTinVuaNhap() {
    this.addImageValue = {};
    this.addImageValue.file.webViewLink = '';
  }
  themMoiLoaiHinhAnh = async () => {
    let loaiHinhAnh: LoaiHinhAnhCTXDEntity;
    try {
      if (this.checkValidLoaiHinhAnh()) {
        loaiHinhAnh = await this.loaiHinhAnhCTXDService
          .create(this.addLoaiHinhAnh)
          .toPromise();
        this.addImageValue.maLoaiHinhAnh = loaiHinhAnh.maLoai;
      }
    } catch (e) {
      throw new Error(e);
    }
    return loaiHinhAnh;
  };
  checkValidLoaiHinhAnh() {
    if (!this.addLoaiHinhAnh.maLoai) {
      throw this.toast.danger('Vui lòng nhập mã loại hình ảnh');
    }
    if (!this.addLoaiHinhAnh.tenLoai) {
      throw this.toast.danger('Vui lòng nhập tên loại hình ảnh');
    }
    if (!this.addLoaiHinhAnh.tenLoai) {
      throw this.toast.danger('Vui lòng nhập stt loại hình ảnh');
    }
    return true;
  }
  checkValidHinhAnh() {
    if (!this.addImageValue.file.id) {
      throw this.toast.danger('Vui lòng chọn hình ảnh');
    }
    if (!this.addImageValue.maLoaiHinhAnh) {
      throw this.toast.danger('Vui lòng chọn loại hình ảnh');
    }
    return true;
  }
  selectedFile(e: QuanLyTepEntity) {
    if (e) {
      this.addImageValue.file = e;
    }
  }
  checkIsHinhAnh() {
    return this.lstHinhAnh.length > 0;
  }
}
