import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { DatatableService } from 'ngn-datatable';
import { Child03Component } from '../child03/child03.component';
import { DataServiceService } from '../share/data-service.service';
import { DemoData } from '../share/demo-data.interface';

@Component({
  selector: 'ga-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit, AfterViewInit {
  @ViewChild(Child03Component) child03;
  @ViewChild('IdChil03') ViewChild03: Child03Component;
@ViewChild('table', { static: false }) table : DatatableService<DemoData>
datatableService: DatatableService<DemoData> = {
  service: this.dataService,
  primaryField: 'maCTXD',
  builder: this.getBuilder.bind(this),
};

  constructor(public dataService: DataServiceService, private toast: NbToastrService) { }
  message: string;
  abc: string;
  text:string;

  dataContainer: DemoData[] = [];

  receiveMessage($event) {
    this.message = $event;
  }
  change($event) {
    this.abc = $event;
  }
  ngOnInit(): void {
    this.dataService.getMany({
      fields: ['maCTXD','tenCongTrinh','chuDauTu'] as Array<keyof DemoData>, //lấy dữ liệu
      // join
    }).subscribe(data => {
      console.log(data);
      this.dataContainer = data;
      this.toast.success('success !');
    }, error => {
      this.toast.danger('fail !')

    })
  }

  ngAfterViewInit() {
    console.log("------> child03 content--> " + this.child03.child03_content);
    console.log("------> child03 03 valu id --> " + this.ViewChild03.valu);

  }
  log() {
    console.log("------> child03 content--> +++ " + this.child03.child03_content);
    console.log("------> child03 valu  --> " + this.child03.valu);
    console.log("------> child03 03 valu id --> +++ " + this.ViewChild03.valu);
  }

  getBuilder(builder: RequestQueryBuilder){
    builder.select(['tenCongTrinh','noiDungDeNghi'] as Array<keyof DemoData>) ;//lấy dữ liệu)
    builder.setJoin([
      { field: 'chuDauTu', select: ['tenChuDauTu'] }
    ]);
    if (this.text) {
      builder.setFilter({
        field: 'maCTXD',
        operator: '$eq',
        value: this.text,
      });
    }
  }
}
