import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { DemoDataEntity } from '../../load-data/share/data.interface';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService extends CrudBaseService<DemoDataEntity>{

  constructor(http: HttpClient) {
    super({
      apiUrl:environment.apiUrl, entity:'rest/ctxd/cong-trinh' }, http);
   }
}
