import { Injectable } from '@angular/core';
import { CrudBaseService, RequestQueryBuilder, CreateQueryParams } from 'nest-crud-typeorm-client';
import { QuanLyTepEntity } from '../interfaces/tep-chia-se.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { DuongDanThuMucEntity } from '../interfaces/duong-dan-thu-muc.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class QuanLyTepService extends CrudBaseService<QuanLyTepEntity> {

    constructor(http: HttpClient) {
        super({
            apiUrl: environment.apiUrl,
            entity: 'ql-tep'
        }, http);
    }
    getManyChiaSe(builder?: RequestQueryBuilder | CreateQueryParams ): Observable<QuanLyTepEntity[]>
     {
        return this.http.get<QuanLyTepEntity[]>(this.getBaseUrl() + '/chia-se', {
          params: this.getParamsFromQuery(builder),
        });
      }
    layDuongDanThuMuc(folderId: string) {
        const url = `${this.getBaseUrl()}/tree-path-parent/${folderId}`;
        return this.http.get<DuongDanThuMucEntity[]>(url);
    }
    uploadTep(file: File, parentId?: string) {
        const url = `${this.getBaseUrl()}/upload`;
        const form = new FormData();
        form.set('file', file);
        (parentId !== undefined) && form.set('parentId', parentId);
        return this.http.post<QuanLyTepEntity>(url, form);
    }

}

@Injectable({
    providedIn: 'root',
  })
  export class QuanLyTepChiaSeService extends CrudBaseService<QuanLyTepEntity> {
    constructor(http: HttpClient) {
      super(
        {
          apiUrl: environment.apiUrl,
          entity: 'ql-tep/chia-se',
        },
        http
      );
    }
}
