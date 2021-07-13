import {
  Component,




  ElementRef,

  EventEmitter,
  Input, OnInit,




  Output, QueryList, ViewChild, ViewChildren
} from '@angular/core';
import { NbPopoverDirective, NbToastrService } from '@nebular/theme';
import { DuongDanThuMucEntity } from '@shared/interfaces/duong-dan-thu-muc.interface';
import { FileTypeEnum, QuanLyTepEntity, ThuMucMacDinhEnum } from '@shared/interfaces/tep-chia-se.interface';
import { QuanLyTepService } from '@shared/services/quan-ly-tep.service';

@Component({
  selector: 'ga-quan-ly-tep',
  templateUrl: './quan-ly-tep.component.html',
  styleUrls: ['./quan-ly-tep.component.scss'],
})
export class QuanLyTepComponent implements OnInit {
  clickDuongDanTep = new EventEmitter<string>();
  thuMucMacDinh = ThuMucMacDinhEnum.ThuMucCuaToi;
  @ViewChildren(NbPopoverDirective) lstPop: QueryList<NbPopoverDirective>;
  @ViewChild('file', { static: false }) file: ElementRef<HTMLInputElement>;
  @Output() selectedEvent = new EventEmitter<QuanLyTepEntity>();
  @Input() fileTypeSelect: FileTypeEnum;
  thuMucMacDinhEnum = ThuMucMacDinhEnum;
  valueSearchFile: string;
  lstFileResult: QuanLyTepEntity[] = [];
  lstData: DuongDanThuMucEntity[] = [];
  lstDataHiden: DuongDanThuMucEntity[];
  firstData: DuongDanThuMucEntity = {};
  currentFolderId: string;
  itemSelected: QuanLyTepEntity;
  status = {
    button: true,
  };

  constructor(
    private quanLyTepService: QuanLyTepService,
    private toast: NbToastrService
  ) { }

  ngOnInit() {
    this.firstData = {
      id: ThuMucMacDinhEnum.ThuMucCuaToi,
      name: 'Thư mục của tôi',
    };
  }
  openInputFile() {
    this.file.nativeElement.click();
  }
  uploadTep(e) {
    if (this.file.nativeElement.value && e.target.value) {
      this.toast.info('Đang up tệp, vui lòng chờ...', 'Thông báo');
      // // cập nhật dữ liệu với service
      const tep = this.file.nativeElement;
      const parentId = this.currentFolderId ? this.currentFolderId : undefined;
      this.quanLyTepService.uploadTep(tep.files[0], parentId).subscribe({
        next: (item) => {
          this.toast.success('Đã tải tệp', 'Thành công');
          this.selectTepTimKiem(item);
          // this.openFolder(parentId ? parentId : ThuMucMacDinhEnum.ThuMucCuaToi);
          this.clickDuongDanTep.next(parentId ? parentId : ThuMucMacDinhEnum.ThuMucCuaToi);
        },
        error: (err) => {
          this.toast.danger(err, 'Lỗi');
        },
      });
    } else {
      this.toast.danger('Vui chọn tệp');
    }
  }
  searchFile(e) {
    this.lstFileResult = [];
    // nếu đang ở Không gian của tôi thì search theo sevice quanLyTepService
    if (this.valueSearchFile) {
      if (this.firstData.id === ThuMucMacDinhEnum.ThuMucCuaToi) {
        this.quanLyTepService
          .getMany({
            join: [{ field: 'owner', select: ['username'] }],
            filter: [
              { field: 'name', operator: '$cont', value: this.valueSearchFile },
            ],
            limit: 5,
          })
          .subscribe((s) => (this.lstFileResult = s));
      } else if (this.firstData.id === ThuMucMacDinhEnum.DuocChiaSe) {
        this.quanLyTepService
          .getManyChiaSe({
            join: [{ field: 'owner', select: ['username'] }],
            filter: [
              { field: 'name', operator: '$cont', value: this.valueSearchFile },
            ],
            limit: 5,
          })
          .subscribe((s) => (this.lstFileResult = s));
      }
    }
  }
  // click vào đường dẫn sẽ load lại đường dẫn
  // Đồng thời lấy tất cả các thư mục con của nó

  changeFolder(id: ThuMucMacDinhEnum) {
    id === ThuMucMacDinhEnum.ThuMucCuaToi ? this.status.button = true : this.status.button = false
    this.loadDuongDan(id);
    this.thuMucMacDinh = id;
  }

  loadDuongDan(folderId) {
    this.lstDataHiden = undefined;
    this.lstData = undefined;
    if(folderId === ThuMucMacDinhEnum.ThuMucCuaToi || folderId === ThuMucMacDinhEnum.DuocChiaSe){
      folderId === ThuMucMacDinhEnum.ThuMucCuaToi ?
      this.firstData = {
        id: ThuMucMacDinhEnum.ThuMucCuaToi,
        name: 'Thư mục của tôi',
      } : 
      this.firstData = {
        id: ThuMucMacDinhEnum.DuocChiaSe,
        name: 'Được chia sẻ',
      };
      this.currentFolderId = null; // lưu lại folderId để dùng khi up tệp
      this.clickDuongDanTep.next(null)
    } else {
      this.quanLyTepService.layDuongDanThuMuc(folderId).subscribe((s) => {
        this.lstDataHiden = undefined;
        this.lstData = s.reverse();
        if (this.lstData.length >= 4) {
          this.lstDataHiden = this.lstData.splice(
            0,
            this.lstData.length - 2
          );
          this.lstData = this.lstData.splice(this.lstData.length - 2);
        }
      });
        this.currentFolderId = folderId; // lưu lại folderId để dùng khi up tệp
      this.clickDuongDanTep.next(folderId) // load dữ liệu
    }
  }
  // chọn tệp từ tìm kiếm
  // nếu tệp là folder thì mở tệp theo id và load lại đường dẫn
  // nếu là tệp khác folder thì chọn
  selectTepTimKiem(item: QuanLyTepEntity) {
    if (item.mimeType === 'folder') {
      this.loadDuongDan(item.id);
    } else {
      this.selectedEvent.emit(item);
    }
    this.valueSearchFile = '';
    this.lstFileResult = [];
  }

}
