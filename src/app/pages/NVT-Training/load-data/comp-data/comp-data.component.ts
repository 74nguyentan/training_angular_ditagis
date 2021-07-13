import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { DemoDataEntity } from '../share/data.interface';
import { ServiceDataService } from '../share/service-data.service';
import { TienDoEntity } from '../share/tienDo.interface';

@Component({
  selector: 'ga-comp-data',
  templateUrl: './comp-data.component.html',
  styleUrls: ['./comp-data.component.scss']
})
export class CompDataComponent implements OnInit {

  dataContainer: DemoDataEntity[] = [];

  constructor(
    private service: ServiceDataService,
    private toast: NbToastrService) { }

  ngOnInit(): void {
    this.service.getMany({
      fields: ['maCTXD', 'tenCongTrinh'] as Array<keyof DemoDataEntity>,
            join: [{field:'tienDo', select: ['tenTienDo'] as Array<keyof TienDoEntity>}]
    }).subscribe(data => {
      console.log(data);
      this.dataContainer = data;
      this.toast.success('success !');
    }),
      error => {
        this.toast.danger('fail !')
      }
  }

}
