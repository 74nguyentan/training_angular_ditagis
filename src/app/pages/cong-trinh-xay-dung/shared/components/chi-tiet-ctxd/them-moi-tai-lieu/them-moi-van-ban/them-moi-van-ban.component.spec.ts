import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiVanBanComponent } from './them-moi-van-ban.component';

describe('ThemMoiVanBanComponent', () => {
  let component: ThemMoiVanBanComponent;
  let fixture: ComponentFixture<ThemMoiVanBanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiVanBanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiVanBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
