import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DatasetEntity } from 'ditagis-auth';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { DatatableService } from 'ngn-datatable';
import { DemoDataEntity } from '../../load-data/share/data.interface';
import { TableServiceService } from '../share/table-service.service';

@Component({
  selector: 'ga-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild('table', { static: false }) table: DatatableService<DemoDataEntity>
  dataTableS: DatatableService<DemoDataEntity> = {
    service: this.dataService,
    primaryField: 'maCTXD',
    builder: this.getBuilder.bind(this)
  }

  text:string;

  constructor(public dataService: TableServiceService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() { }

  getBuilder(buider: RequestQueryBuilder) {
    buider.select(['tenCongTrinh', 'noiDungDeNghi'] as Array<keyof DemoDataEntity>);
    buider.setJoin([
      { field: 'chuDauTu', select: ['tenChuDauTu'] }
    ]);

    // search 
    if (this.text) {
      buider.setFilter({
        field: 'maCTXD',
        operator: '$eq',
        value: this.text,
      });
    }
  }
}
