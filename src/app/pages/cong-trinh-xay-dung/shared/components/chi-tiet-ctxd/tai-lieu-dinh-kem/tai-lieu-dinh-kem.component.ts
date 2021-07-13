import { Component, Input, OnInit } from '@angular/core';
import { ThongTinCongTrinhCPXDEntity } from '@shared/services/cong-trinh-xay-dung/cap-phep-xay-dung/thong-tin-cong-trinh-cpxd.interface';
import { CongTrinhXayDungService } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.service';
import { CongTrinhXayDungEntity } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xd/cong-trinh-xay-dung.interface';

@Component({
  selector: 'ga-tai-lieu-dinh-kem',
  templateUrl: './tai-lieu-dinh-kem.component.html',
  styleUrls: ['./tai-lieu-dinh-kem.component.scss'],
})
export class TaiLieuDinhKemComponent implements OnInit {
  @Input() maCTXD: string;
  maCTCPXD: string;
  constructor(private congTrinhXayDungService: CongTrinhXayDungService) {}

  ngOnInit() {
    if (this.maCTXD) {
      this.congTrinhXayDungService
        .getOne(this.maCTXD, {
          fields: ['maCTXD', 'capPhepXayDung'] as Array<
            keyof CongTrinhXayDungEntity
          >,
          join: [
            {
              field: 'capPhepXayDung',
              select: ['maCTCPXD'] as Array<keyof ThongTinCongTrinhCPXDEntity>,
            },
          ],
        })
        .subscribe((s) => {
          if (s && s.capPhepXayDung) {
            this.maCTCPXD = s.capPhepXayDung.maCTCPXD;
          }
        });
    }
  }
}
