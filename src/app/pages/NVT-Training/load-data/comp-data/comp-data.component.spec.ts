import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDataComponent } from './comp-data.component';

describe('CompDataComponent', () => {
  let component: CompDataComponent;
  let fixture: ComponentFixture<CompDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
