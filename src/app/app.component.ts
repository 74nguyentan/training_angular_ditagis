/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet *ngIf="loaded"></router-outlet>',
})
export class AppComponent implements OnInit {
  loaded = true;
  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService
  ) {
    // this.socket.emit('token');
    // this.socket.fromEvent('token').subscribe(({ accessToken, expired }) => {
    //   localStorage.setItem('accessToken', accessToken);
    //   this.loaded = true;
    //   const countdown = new Date(expired * 1000);
    //   // lấy token trước 5'
    //   countdown.setMinutes(countdown.getMinutes() - 5);
    //   const timeout = (countdown.getTime() - Date.now())
    //   setTimeout(() => {
    //     this.socket.emit('token')
    //   }, timeout);
    // });
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
