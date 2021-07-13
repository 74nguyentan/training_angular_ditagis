/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaoCaoService } from './bao-cao.service';

describe('Service: BaoCao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaoCaoService]
    });
  });

  it('should ...', inject([BaoCaoService], (service: BaoCaoService) => {
    expect(service).toBeTruthy();
  }));
});
