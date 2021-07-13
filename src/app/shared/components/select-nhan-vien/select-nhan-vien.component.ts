import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThongTinCongTrinhCPXDService } from '@shared/services/cong-trinh-xay-dung/cong-trinh-cpxd.service';
import { UserEntity } from 'ditagis-auth';

@Component({
  selector: 'ga-select-nhan-vien',
  templateUrl: './select-nhan-vien.component.html',
  styleUrls: ['./select-nhan-vien.component.scss']
})
export class SelectNhanVienComponent implements OnInit {
  @Input()
  fullWidth = true;
  @Input() allValue = false;

  @Output() valueChange = new EventEmitter<string>();
  @Input() value: string;
  values: UserEntity[] = [];
  @Input() disabled =  false;
  constructor(
    public thongTinCongTrinhService: ThongTinCongTrinhCPXDService
  ) { }

  async ngOnInit(){
   this.values = await this.thongTinCongTrinhService.getUsers().toPromise()
  }

}
