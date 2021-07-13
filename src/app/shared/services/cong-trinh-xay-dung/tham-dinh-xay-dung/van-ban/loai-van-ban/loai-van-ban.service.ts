import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { CrudBaseService } from 'nest-crud-typeorm-client';
import { LoaiVanBanTDXDEntity } from './loai-van-ban.interface';

@Injectable({providedIn:'root'})
export class LoaiVanBanService extends CrudBaseService<LoaiVanBanTDXDEntity> {
    constructor(http:HttpClient) {
        super({apiUrl:environment.apiUrl,entity:'rest/tdxd/van-ban/loai'},http)
    }
}
