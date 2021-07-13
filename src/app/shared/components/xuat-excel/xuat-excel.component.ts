import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DiaChiService } from '@shared/services/dia-chi.service';
import { DatatableComponent, ExportExcelDirective } from 'ngn-datatable';

@Component({
  selector: 'ga-xuat-excel',
  templateUrl: './xuat-excel.component.html',
  styleUrls: ['./xuat-excel.component.scss'],
})
export class XuatExcelComponent implements OnInit {
  @Input() table: DatatableComponent<any>;
  @Output() click = new EventEmitter();
  @ViewChild(ExportExcelDirective) excel: ExportExcelDirective;
  loading = false;
  constructor(private diaChiService: DiaChiService) {
    this.renderCellExcel = this.renderCellExcel.bind(this);
    this.renderHeader=this.renderHeader.bind(this);
  }

  ngOnInit(): void { }
  renderHeader(){
    const date = new Date();
return {
  a1: 'SỞ XÂY DỰNG BÌNH DƯƠNG',
  a2: 'BÁO CÁO',
  i4: `Bình Dương, ngày ${date.getDate()}, tháng ${date.getMonth() + 1}, năm ${date.getFullYear()}`,
};
  }
  renderCellExcel(prop: string, value: any): { text: string } {
    if (prop === 'diaChi') {
      return { text: this.diaChiService.toString(value) };
    }
    if (prop === 'maCTXD') {
      return { text: value ? 'Đã chuyển' : 'Chưa chuyển' };
    }
    if (prop === 'tienDo') {
      return { text: value.tenTienDo };
    }
    if (prop === 'tienDo.tenTienDo') {
      return { text: value };
    }
    return { text: value };
  }

  handleClick(e: MouseEvent) {
    this.loading = true;
    this.click.emit();
    this.excel.table = this.table;
    this.excel.handleClick(null);
  }
}
