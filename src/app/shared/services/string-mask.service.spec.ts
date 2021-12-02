import { TestBed } from '@angular/core/testing';

import { StringMaskService } from './string-mask.service';

describe('StringMaskService', () => {
  let service: StringMaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringMaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
