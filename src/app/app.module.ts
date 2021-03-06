/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import {
  DitagisAuthModule,
  ErrorInterceptor,
  JwtInterceptor,
  DTGAuthService,
} from 'ditagis-auth';
import { environment } from '../environments/environment';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
registerLocaleData(localeVi, 'vi-VN');
import moment from 'moment';
import { PhanQuyenDvhcInterceptor } from '@shared/interceptors/phan-quyen-dvhc.interceptor';
// import { SocketIoModule } from 'ngx-socket-io';
// import { SetHeaderInterceptor } from '@shared/interceptors/set-header.interceptor';
moment.locale('vi-VN');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    CoreModule.forRoot(),
    DitagisAuthModule.forRoot({
      apiUrl: environment.apiUrl,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
      deps: [DTGAuthService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PhanQuyenDvhcInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
      deps: [DTGAuthService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
