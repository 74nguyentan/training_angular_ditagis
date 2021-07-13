import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { HoatDongTDXDEntity } from './hoat-dong.interface';

@Injectable({providedIn:'root'})
export class HoatDongService extends CrudBaseService<HoatDongTDXDEntity>{
    constructor(http:HttpClient){
        super({apiUrl:environment.apiUrl,entity:'rest/tdxd/hoat-dong'},http);
    }
}
