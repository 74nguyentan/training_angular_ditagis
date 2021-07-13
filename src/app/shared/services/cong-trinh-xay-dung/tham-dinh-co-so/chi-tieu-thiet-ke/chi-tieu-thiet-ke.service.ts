import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { ChiTieuThietKeTDCSEntity } from './chi-tieu-thiet-ke.interface';


@Injectable({providedIn:'root'})
export class ChiTieuThietKeTDCSService extends CrudBaseService<
Partial<ChiTieuThietKeTDCSEntity>
> {
  constructor(
    http:HttpClient
  ) {
   super({apiUrl:environment.apiUrl,entity:'rest/tdcs/chi-tieu-thiet-ke'},http);
  }
}
