import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiLieuDinhKemComponent } from './tai-lieu-dinh-kem.component';

describe('TaiLieuDinhKemComponent', () => {
  let component: TaiLieuDinhKemComponent;
  let fixture: ComponentFixture<TaiLieuDinhKemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaiLieuDinhKemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaiLieuDinhKemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
