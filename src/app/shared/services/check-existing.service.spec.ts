import { TestBed } from '@angular/core/testing';

import { CheckExistingService } from './check-existing.service';

describe('CheckExistingService', () => {
  let service: CheckExistingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckExistingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
