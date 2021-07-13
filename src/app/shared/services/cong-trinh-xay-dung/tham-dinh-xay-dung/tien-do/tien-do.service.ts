import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { CrudBaseService } from 'nest-crud-typeorm-client';
import { TienDoTDXDEntity } from './tien-do.interface';

@Injectable({providedIn:'root'})
export class TienDoService extends CrudBaseService<TienDoTDXDEntity> {
  constructor(http:HttpClient) {
    super({apiUrl:environment.apiUrl,entity:'rest/tdxd/tien-do'},http);
  }
}
