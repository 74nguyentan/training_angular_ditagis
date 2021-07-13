import { Injectable, Inject } from '@angular/core';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { HttpClient } from '@angular/common/http';
import { ThuaDatEntity } from './thua-dat.interface';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThuaDatService extends CrudBaseService<ThuaDatEntity> {
  constructor(
    http: HttpClient
  ) {
    super({
      apiUrl: environment.apiUrl + '/rest',
      entity: 'thua-dat'
    }, http);
  }

}
