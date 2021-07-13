import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { DoAnEntity } from '@shared/interfaces/do-an.interface';
import { CrudBaseService } from 'nest-crud-typeorm-client';

@Injectable({ providedIn: 'root' })
export class DoAnService extends CrudBaseService<DoAnEntity> {
  constructor(http: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/do-an' },
      http
    );
  }
}