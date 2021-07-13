import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrentComponent } from './childrent.component';

describe('ChildrentComponent', () => {
  let component: ChildrentComponent;
  let fixture: ComponentFixture<ChildrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
