import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanDoComponent } from './ban-do.component';

describe('BanDoComponent', () => {
  let component: BanDoComponent;
  let fixture: ComponentFixture<BanDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
