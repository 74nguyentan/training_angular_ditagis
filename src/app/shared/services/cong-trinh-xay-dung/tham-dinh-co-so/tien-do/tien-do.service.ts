import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { CrudBaseService } from 'nest-crud-typeorm-client';
import { TienDoTDCSEntity } from './tien-do.interface';

@Injectable({providedIn:'root'})
export class TienDoService extends CrudBaseService<TienDoTDCSEntity> {
  constructor(http:HttpClient) {
    super({apiUrl:environment.apiUrl,entity:'rest/tdcs/tien-do'},http);
  }
}
