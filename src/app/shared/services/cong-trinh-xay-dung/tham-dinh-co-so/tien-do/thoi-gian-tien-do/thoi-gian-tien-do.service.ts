import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { TGHetHanTienDoTDCSEntity } from './thoi-gian-tien-do.interface';

@Injectable({providedIn:'root'})
export class ThoiGianTienDoService extends CrudBaseService<TGHetHanTienDoTDCSEntity>{
  constructor(http:HttpClient){super({apiUrl:environment.apiUrl,entity:'rest/tdcs/thoi-gian-tien-do'},http)};
}