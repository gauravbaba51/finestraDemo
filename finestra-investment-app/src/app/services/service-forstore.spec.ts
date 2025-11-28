import { TestBed } from '@angular/core/testing';

import { ServiceForstore } from './service-forstore';

describe('ServiceForstore', () => {
  let service: ServiceForstore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceForstore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
