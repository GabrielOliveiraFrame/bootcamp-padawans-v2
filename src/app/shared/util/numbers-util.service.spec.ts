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

  describe('the onlyNumber method', () => {
    it('should return only numbers', () => {
      const value = '(11) 99999-9999';
      const expectedValue = '11999999999';

      expect(service.onlyNumbers(value)).toEqual(expectedValue);
    })
  })
});
