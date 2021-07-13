import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenDemoComponent } from './children-demo.component';

describe('ChildrenDemoComponent', () => {
  let component: ChildrenDemoComponent;
  let fixture: ComponentFixture<ChildrenDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
