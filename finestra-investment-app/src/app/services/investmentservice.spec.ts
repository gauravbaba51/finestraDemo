import { TestBed } from '@angular/core/testing';

import { Investmentservice } from './investmentservice';

describe('Investmentservice', () => {
  let service: Investmentservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Investmentservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
