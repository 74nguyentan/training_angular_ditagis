import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { CrudBaseService } from 'nest-crud-typeorm-client';
import { VanBanTDXDEntity } from './van-ban.interface';

@Injectable({providedIn:'root'})
export class VanBanService extends CrudBaseService<Partial<VanBanTDXDEntity>>{
    constructor(http:HttpClient) {
        super({apiUrl:environment.apiUrl,entity:'rest/tdxd/van-ban/van-ban'},http);
    }
}
