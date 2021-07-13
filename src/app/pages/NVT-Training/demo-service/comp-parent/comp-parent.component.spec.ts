import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompParentComponent } from './comp-parent.component';

describe('CompParentComponent', () => {
  let component: CompParentComponent;
  let fixture: ComponentFixture<CompParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
