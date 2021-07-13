import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { CrudBaseService } from 'nest-crud-typeorm-client';
import { ChungChiDonViXayDungTDXDEntity } from './chung-chi.interface';

@Injectable({providedIn:'root'})
export class ChungChiService extends CrudBaseService<ChungChiDonViXayDungTDXDEntity> {
    constructor(http:HttpClient){
        super({apiUrl:environment.apiUrl,entity:'rest/dvnxd/chung-chi'},http);
    }
}
