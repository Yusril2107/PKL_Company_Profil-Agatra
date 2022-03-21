import { TestBed } from '@angular/core/testing';

import { AppDetailportofolioService } from './appdetailportofolio.service';

describe('AppDetailportofolioService', () => {
  let service: AppDetailportofolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDetailportofolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
