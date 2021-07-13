import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { LichSuTienDoTDCSEntity } from './lich-su-tien-do.interface';

@Injectable({providedIn:'root'})
export class LichSuTienDoService extends CrudBaseService<
  Partial<LichSuTienDoTDCSEntity>
> {
  constructor(http:HttpClient) {
    super({apiUrl:environment.apiUrl,entity:'rest/tdcs/lich-su-tien-do'},http);
  }
}
