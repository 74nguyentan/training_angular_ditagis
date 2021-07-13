import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { CrudBaseService } from 'nest-crud-typeorm-client';
import { DinhKemTDCSEntity } from './dinh-kem.interface';

@Injectable({providedIn:'root'})
export class DinhKemService extends CrudBaseService<DinhKemTDCSEntity>{
    constructor(http:HttpClient){
        super({apiUrl:environment.apiUrl,entity:'rest/tdcs/dinh-kem'},http);
    }
}
