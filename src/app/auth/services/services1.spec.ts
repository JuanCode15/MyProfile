import { TestBed } from '@angular/core/testing';

import { Services1 } from './services1';

describe('Services1', () => {
  let service: Services1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Services1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
