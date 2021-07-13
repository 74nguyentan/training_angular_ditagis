import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationEntity, UserEntity } from 'ditagis-auth';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class PhanQuyenService {
  constructor(private httpClient: HttpClient) {}
  getTaiKhoans() {
    return this.httpClient.get<UserEntity[]>(
      environment.apiUrl + '/rest/ctxd/phan-quyen/tai-khoan'
    );
  }
}
