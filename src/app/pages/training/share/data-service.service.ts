import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { DemoData } from './demo-data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService extends CrudBaseService<DemoData>{

  constructor(http: HttpClient) {
    super({
      apiUrl:environment.apiUrl, entity:'rest/ctxd/cong-trinh' }, http);
   }
}
 