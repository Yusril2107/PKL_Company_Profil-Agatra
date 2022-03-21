import { TestBed } from '@angular/core/testing';

import { DetailclientService } from './detailclient.service';

describe('DetailclientService', () => {
  let service: DetailclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
