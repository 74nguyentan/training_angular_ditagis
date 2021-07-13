import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDoAnComponent } from './select-do-an.component';

describe('SelectDoAnComponent', () => {
  let component: SelectDoAnComponent;
  let fixture: ComponentFixture<SelectDoAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDoAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDoAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
