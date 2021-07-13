import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { CrudBaseService } from 'nest-crud-typeorm-client';
import { LoaiVanBanTDCSEntity } from './loai-van-ban.interface';

@Injectable({providedIn:'root'})
export class LoaiVanBanService extends CrudBaseService<LoaiVanBanTDCSEntity> {
    constructor(http:HttpClient) {
        super({apiUrl:environment.apiUrl,entity:'rest/tdcs/van-ban/loai'},http)
    }
}
