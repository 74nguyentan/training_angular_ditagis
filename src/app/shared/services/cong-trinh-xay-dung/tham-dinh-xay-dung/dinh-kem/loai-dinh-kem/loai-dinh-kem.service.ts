import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { CrudBaseService } from 'nest-crud-typeorm-client';
import { LoaiDinhKemTDXDEntity } from './loai-dinh-kem.interface';

@Injectable({providedIn:'root'})
export class LoaiDinhKemService extends CrudBaseService<LoaiDinhKemTDXDEntity>{
    constructor(http:HttpClient) {
        super({apiUrl:environment.apiUrl,entity:'rest/tdxd/loai-dinh-kem'},http);
    }
}
