import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyTepComponent } from './quan-ly-tep.component';

describe('QuanLyTepComponent', () => {
  let component: QuanLyTepComponent;
  let fixture: ComponentFixture<QuanLyTepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuanLyTepComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyTepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
