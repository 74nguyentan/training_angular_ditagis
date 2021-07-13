import { Injectable } from '@angular/core';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ChuDauTuEntity } from '../interfaces/chu-dau-tu.interface';

@Injectable({
    providedIn: 'root'
  })
export class ChuDauTuService extends CrudBaseService<ChuDauTuEntity>{
    constructor(http: HttpClient) {
        super({
          apiUrl: environment.apiUrl,
          entity:  'rest/chu-dau-tu'
        }, http);
      }
}