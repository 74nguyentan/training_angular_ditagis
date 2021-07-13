import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { HoatDongTDCSEntity } from './hoat-dong.interface';

@Injectable({providedIn:'root'})
export class HoatDongService extends CrudBaseService<HoatDongTDCSEntity>{
    constructor(http:HttpClient){
        super({apiUrl:environment.apiUrl,entity:'rest/tdcs/hoat-dong'},http);
    }
}
