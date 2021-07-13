
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { ChiTietDonViThietKeCongTrinhTDCSEntity } from './chi-tiet-dv.interface';

@Injectable({providedIn:'root'})
export class ChiTietDvService extends CrudBaseService<ChiTietDonViThietKeCongTrinhTDCSEntity>{
    constructor(http:HttpClient){
        super({apiUrl:environment.apiUrl,entity:'rest/tdcs/chi-tiet-dv'},http);
    }
}
