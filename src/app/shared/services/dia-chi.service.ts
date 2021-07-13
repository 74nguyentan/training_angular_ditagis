import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { DiaChiEntity } from '@shared/interfaces/dia-chi.interface';
import { CrudBaseService } from 'nest-crud-typeorm-client';

@Injectable({
  providedIn: 'root',
})
export class DiaChiService extends CrudBaseService<DiaChiEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/dia-chi',
      },
      http
    );
  }

  toString(data: DiaChiEntity) {
    const names = [];

    if (data && data.chiTiet) {
      names.push(`${data.chiTiet}`);
    }
    if (data && data.phuongXa) {
      names.push(` ${data.phuongXa.tenPhuongXa}`);
    }
    if (data && data.quanHuyen) {
      names.push(` ${data.quanHuyen.tenQuanHuyen}`);
    }
    if (data && data.tinhTP) {
      names.push(` ${data.tinhTP.tenTinhTP}`);
    }
    let name = names.join(', ');
    return name;
  }
}
