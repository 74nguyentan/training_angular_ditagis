import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { CrudBaseService } from 'nest-crud-typeorm-client';
import { LoaiDinhKemTDCSEntity } from './loai-dinh-kem.interface';

@Injectable({providedIn:'root'})
export class LoaiDinhKemService extends CrudBaseService<LoaiDinhKemTDCSEntity>{
    constructor(http:HttpClient) {
        super({apiUrl:environment.apiUrl,entity:'rest/tdcs/loai-dinh-kem'},http);
    }
}
