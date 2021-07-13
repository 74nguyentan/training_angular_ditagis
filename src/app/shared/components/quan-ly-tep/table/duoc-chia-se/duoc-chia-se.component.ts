import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { QuanLyTepEntity } from '@shared/interfaces/tep-chia-se.interface';
import { QuanLyTepChiaSeService } from '@shared/services/quan-ly-tep.service';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { DatatableService } from 'ngn-datatable';
import { BaseTableComponent } from '../base-table.component';

@Component({
  selector: 'ga-duoc-chia-se',
  templateUrl: './duoc-chia-se.component.html',
  styleUrls: ['./duoc-chia-se.component.scss']
})
export class DuocChiaSeComponent extends BaseTableComponent implements OnInit {
  datatableService: DatatableService<QuanLyTepEntity> = {
    service: this.service,
    primaryField: 'id',
    builder: this.getBuilder.bind(this),
  };
  constructor(
    service: QuanLyTepChiaSeService,
    toast: NbToastrService
  ) {
    super(service,toast)
   }

  ngOnInit() {
    super.ngOnInit();
  }
  getBuilder(builder: RequestQueryBuilder){
    super.getBuilder(builder);
    if(!this.builderEntity.parentId){
      builder.setFilter([
        {
          field: 'sharesFile.isRoot',
          operator: '$eq',
          value: true,
        },
      ]);
    }
    return builder;
  }
}
