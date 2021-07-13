import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChuDauTuComponent } from './select-chu-dau-tu.component';

describe('SelectChuDauTuComponent', () => {
  let component: SelectChuDauTuComponent;
  let fixture: ComponentFixture<SelectChuDauTuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectChuDauTuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectChuDauTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
