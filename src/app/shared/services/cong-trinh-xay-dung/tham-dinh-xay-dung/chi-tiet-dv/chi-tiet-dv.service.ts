
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { ChiTietDonViThietKeCongTrinhTDXDEntity } from './chi-tiet-dv.interface';

@Injectable({providedIn:'root'})
export class ChiTietDvService extends CrudBaseService<ChiTietDonViThietKeCongTrinhTDXDEntity>{
    constructor(http:HttpClient){
        super({apiUrl:environment.apiUrl,entity:'rest/tdxd/chi-tiet-dv'},http);
    }
}
