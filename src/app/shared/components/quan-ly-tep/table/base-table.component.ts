import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,

  Output,
  ViewChild
} from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { FileTypeEnum, QuanLyTepEntity, ThuMucMacDinhEnum } from '@shared/interfaces/tep-chia-se.interface';
import { CrudBaseService, RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { DatatableComponent } from 'ngn-datatable';
import { Observable, Subscription } from 'rxjs';

@Component({ template: '' })
export class BaseTableComponent implements OnDestroy{
  @Input() clickDuongDanTep: Observable<string>;
  @ViewChild('table', { static: false })
  table: DatatableComponent<QuanLyTepEntity>;

  @Output() selectedEvent = new EventEmitter<QuanLyTepEntity>();
  @Output() reloadDuongDan = new EventEmitter<string>();
  @Input() fileTypeSelect: FileTypeEnum;
  currentFolderId: string;
  lstFileType = {
    VanBan: [
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/pdf',
      'folder',
    ],
    HinhAnh: ['image/jpg', 'image/png', 'image/jpeg', 'folder'],
    BanVe: ['application/acad', 'folder'],
  };
  //
  itemSelected: QuanLyTepEntity;
  status = {
    button: true,
  };
  builderEntity =  {
    parentId: undefined
  }
  private subscrip:Subscription;
  constructor(
    protected service: CrudBaseService<QuanLyTepEntity>,
    protected toast: NbToastrService
  ) {}

  ngOnInit() {
   this.subscrip =  this.clickDuongDanTep.subscribe((value) => {this.openFolder(value)});
  }
  ngOnDestroy(){
    this.subscrip.unsubscribe();
  }
  selectTep(e) {
    const data: QuanLyTepEntity = e.row;
    if (e.type === 'dblclick' && data.mimeType === 'folder') {
      this.currentFolderId = data.id;
      this.openFolder(data.id);
      this.reloadDuongDan.emit(data.id)
    } else if (e.type === 'click' && data.mimeType !== 'folder') {
      this.selectedEvent.emit(data);
    }
  }

  // Ngược lại thì lấy thư mục con của id folder
  openFolder(parentId) {
    // nếu mở folder là thư mục đặc biệt thì gán null
      if([ThuMucMacDinhEnum.DuocChiaSe,ThuMucMacDinhEnum.ThuMucCuaToi,
      ThuMucMacDinhEnum.YeuThich
      ].indexOf(parentId) > -1){
        this.builderEntity.parentId = null;
      }else{ this.builderEntity.parentId = parentId
      }
   
    this.table && this.table.loadData()
  }

  protected getBuilder(builder: RequestQueryBuilder) {
    builder.setJoin([
      { field: 'owner', select: ['username'] }
    ])
    if (this.builderEntity.parentId 
    
      ) {
      builder.setFilter([
        {
          field: 'parentId',
          operator: '$eq',
          value: this.builderEntity.parentId,
        },
      ]);
    } else {
      builder.setFilter([
        {
          field: 'parentId',
          operator: '$isnull',
        },
      ]);
    }
    if (this.fileTypeSelect === FileTypeEnum.VanBan) {
      builder.setFilter({
        field: 'mimeType',
        operator: '$in',
        value: this.lstFileType.VanBan.map((m) => m),
      });
    } else if (this.fileTypeSelect === FileTypeEnum.BanVe) {
      builder.setFilter([
        {
          field: 'mimeType',
          operator: '$in',
          value: this.lstFileType.BanVe.map((m) => m),
        },
      ]);
    } else if (this.fileTypeSelect === FileTypeEnum.HinhAnh) {
      builder.setFilter({
        field: 'mimeType',
        operator: '$in',
        value: this.lstFileType.HinhAnh.map((m) => m),
      });
    }
    return builder;
  }

}
