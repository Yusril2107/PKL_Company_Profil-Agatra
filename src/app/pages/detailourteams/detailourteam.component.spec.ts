import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailourteamComponent } from './detailourteam.component';

describe('DetailourteamComponent', () => {
  let component: DetailourteamComponent;
  let fixture: ComponentFixture<DetailourteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailourteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailourteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
