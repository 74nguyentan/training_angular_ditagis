import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanBanComponent } from './van-ban.component';

describe('VanBanComponent', () => {
  let component: VanBanComponent;
  let fixture: ComponentFixture<VanBanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanBanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
