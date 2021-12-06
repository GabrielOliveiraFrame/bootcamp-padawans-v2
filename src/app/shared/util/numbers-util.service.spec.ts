import { TestBed } from '@angular/core/testing';

import { NumbersUtilService } from './numbers-util.service';

describe('NumbersUtilService', () => {
  let service: NumbersUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumbersUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
