import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { CrudBaseService } from 'nest-crud-typeorm-client';
import { VanBanTDCSEntity } from './van-ban.interface';

@Injectable({providedIn:'root'})
export class VanBanService extends CrudBaseService<Partial<VanBanTDCSEntity>>{
    constructor(http:HttpClient) {
        super({apiUrl:environment.apiUrl,entity:'rest/tdcs/van-ban/van-ban'},http);
    }
}
