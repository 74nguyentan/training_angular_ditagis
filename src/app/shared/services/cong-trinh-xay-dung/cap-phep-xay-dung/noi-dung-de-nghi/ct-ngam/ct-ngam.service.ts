import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { CongTrinhCPXDNgamEntity } from './ct-ngam.interface';

@Injectable({
  providedIn: 'root',
})
export class CongTrinhCPXDNgamService extends CrudBaseService<
  Partial<CongTrinhCPXDNgamEntity>
> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/cpxd/ct-ngam',
      },
      httpClient
    );
  }
}
