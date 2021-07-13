import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import {
  NbMediaBreakpointsService,
  NbMenuItem,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from '@nebular/theme';
import { DTGAuthService, UserEntity } from 'ditagis-auth';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../../@core/utils';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  get logoUrl() {
    return environment.logoUrl;
  }
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: UserEntity;

  themes = [
    {
      value: 'corporate',
      name: 'Mặc định',
    },
    {
      value: 'default',
      name: 'Bóng đổ',
    },
    {
      value: 'dark',
      name: 'Tối',
    },
    {
      value: 'cosmic',
      name: 'Tím',
    },
  ];

  currentTheme = 'default';

  userMenu: NbMenuItem[] = [{ title: 'Đăng xuất' }];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private authService: DTGAuthService
  ) {}

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl)
      );

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe((themeName) => (this.currentTheme = themeName));

    this.user = this.authService.getInfo();
    this.menuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'context-menu'),
        map(({ item: { title } }) => title)
      )
      .subscribe((title) => {
        if (title === 'Đăng xuất') {
          this.authService.deAuthenticate();
          location.reload();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
