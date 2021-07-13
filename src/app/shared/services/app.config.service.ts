import { Injectable } from '@angular/core';
import { DTGAuthService } from 'ditagis-auth';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  constructor(
    private authService: DTGAuthService
  ) { }

  getRoot(): Observable<any> {
    return this.authService.getAppInfo({
      appId: environment.appId.root,
      isGuest: true
    })
      .pipe(map(s => s.config)
      );
  }

}
