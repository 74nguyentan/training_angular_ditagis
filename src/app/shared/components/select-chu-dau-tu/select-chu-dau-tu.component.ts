import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NbAutocompleteComponent, NbToastrService } from '@nebular/theme';
import { ChuDauTuEntity } from '@shared/interfaces/chu-dau-tu.interface';
import { ChuDauTuService } from '@shared/services/chu-dau-tu.service';
@Component({
  selector: 'ga-select-chu-dau-tu',
  templateUrl: './select-chu-dau-tu.component.html',
  styleUrls: ['./select-chu-dau-tu.component.css'],
})
export class SelectChuDauTuComponent implements OnInit {
  @ViewChild(NbAutocompleteComponent)
  ac: NbAutocompleteComponent<ChuDauTuEntity>;
  @Input()
  fullWidth = false;
  @Input() allValue = false;
  /**
   * @returns maChuDauTu
   */
  @Output() valueChange = new EventEmitter<string>();
  @Input() value: string;

  private _entityAdd: Partial<ChuDauTuEntity>;
  public get entityAdd(): Partial<ChuDauTuEntity> {
    if (!this._entityAdd) {
      this._entityAdd = { diaChiLienHe: {} };
    }
    return this._entityAdd;
  }
  public set entityAdd(v: Partial<ChuDauTuEntity>) {
    this._entityAdd = v;
  }

  @Output() themMoi = new EventEmitter<Partial<ChuDauTuEntity>>();
  @Input() isAdd = false;
  @Input() required = false;
  dlgAdd = false;
  constructor(
    public service: ChuDauTuService,
    private toast: NbToastrService
  ) {}

  ngOnInit() {}

  themMoiHandle = async () => {
    try {
      if (this.checkValid()) {
        const chuDauTu = await this.service.create(this.entityAdd).toPromise();
        this.themMoi.emit(chuDauTu);
        this.closeDlg();
        this.toast.success('Thêm mới chủ đầu tư thành công', 'Thông báo');
        this.value = chuDauTu.maChuDauTu;
      }
    } catch (e) {
      this.toast.danger(e);
    }
  };

  checkValid() {
    if (!this.entityAdd.tenChuDauTu) {
      throw new Error('Vui lòng nhập tên chủ đầu tư');
    }
    if (!this.entityAdd.nguoiDaiDien) {
      throw new Error('Vui lòng nhập người đại diện');
    }
    if (!this.entityAdd.chucVu) {
      throw new Error('Vui lòng nhập chức vụ');
    }
    if (!this.entityAdd.soDienThoai) {
      throw new Error('Vui lòng nhập số điện thoại');
    }
    if (!this.entityAdd.diaChiLienHe.tinhTP?.maTinhTP) {
      throw new Error('Vui lòng chọn tỉnh/TP');
    }
    if (!this.entityAdd.diaChiLienHe.quanHuyen?.maQuanHuyen) {
      throw new Error('Vui lòng chọn quận huyện');
    }
    if (!this.entityAdd.diaChiLienHe.phuongXa?.maPhuongXa) {
      throw new Error('Vui lòng chọn phường xã');
    }
    return true;
  }

  closeDlg() {
    delete this.entityAdd;
    this.dlgAdd = false;
  }
}
