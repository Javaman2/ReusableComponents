import { TestBed } from '@angular/core/testing';

import { Cmp2Service } from './cmp2.service';

describe('Cmp2Service', () => {
  let service: Cmp2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cmp2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
