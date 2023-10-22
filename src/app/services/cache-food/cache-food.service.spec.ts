import { TestBed } from '@angular/core/testing';

import { CacheFoodService } from './cache-food.service';

describe('CacheFoodService', () => {
  let service: CacheFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
