import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailportofolioComponent } from './detailportofolio.component';

describe('DetailportofolioComponent', () => {
  let component: DetailportofolioComponent;
  let fixture: ComponentFixture<DetailportofolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailportofolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailportofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
