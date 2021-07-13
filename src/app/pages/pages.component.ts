import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { DTGAuthService } from 'ditagis-auth';
// tslint:disable-next-line:max-line-length
import { ChucNangTaiKhoanService } from '../shared/services/phan-quyen//chuc-nang-tai-khoan/chuc-nang-tai-khoan.service';
import { NbMenuItem } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  constructor(
    private authService: DTGAuthService,
    private cntkService: ChucNangTaiKhoanService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  menu = MENU_ITEMS;
  ngOnInit() {
    this.cntkService
      .getMany({
        fields: ['applicationId'],
        filter: [
          {
            field: 'userId',
            operator: '$eq',
            value: this.authService.getInfo().userId,
          },
        ],
      })
      .subscribe((result) => {
        const applicationsIds = result.map((m) => m.applicationId);
        const menuVisibles = this.setAccessMenu(this.menu, applicationsIds);
        if (menuVisibles.length) {
          if (this.router.url === '/') {
            this.router.navigateByUrl(menuVisibles[0].link);
          }
        }
      });
  }

  setAccessMenu(menus: NbMenuItem[], applicationsIds: string[]) {
    const menuVisibles: NbMenuItem[] = [];
    menus.forEach((menu) => {
      if (applicationsIds.some((appId) => appId === menu.data)) {
        menu.hidden = false;
        menuVisibles.push(menu);
      }
      if (menu.children) {
        menuVisibles.push(
          ...this.setAccessMenu(menu.children, applicationsIds)
        );
      }
    });
    return menuVisibles;
  }
}
