import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { ChiTieuThietKeTDXDEntity } from './chi-tieu-thiet-ke.interface';


@Injectable({providedIn:'root'})
export class ChiTieuThietKeTDXDService extends CrudBaseService<
Partial<ChiTieuThietKeTDXDEntity>
> {
  constructor(
    http:HttpClient
  ) {
   super({apiUrl:environment.apiUrl,entity:'rest/tdxd/chi-tieu-thiet-ke'},http);
  }
}
