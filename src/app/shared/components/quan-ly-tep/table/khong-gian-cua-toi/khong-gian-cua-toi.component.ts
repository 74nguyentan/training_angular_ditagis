import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { QuanLyTepEntity } from '@shared/interfaces/tep-chia-se.interface';
import { QuanLyTepService } from '@shared/services/quan-ly-tep.service';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { DatatableService } from 'ngn-datatable';
import { BaseTableComponent } from '../base-table.component';

@Component({
  selector: 'ga-khong-gian-cua-toi',
  templateUrl: './khong-gian-cua-toi.component.html',
  styleUrls: ['./khong-gian-cua-toi.component.scss']
})
export class KhongGianCuaToiComponent extends BaseTableComponent implements OnInit {
  datatableService: DatatableService<QuanLyTepEntity> = {
    service: this.service,
    primaryField: 'id',
    builder: this.getBuilder.bind(this),
  };
  constructor(
    service: QuanLyTepService,
    toast: NbToastrService
  ) {
    super(
      service,
      toast
    )
   }

  ngOnInit(){
    super.ngOnInit();
  }

}
