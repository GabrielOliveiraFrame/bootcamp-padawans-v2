import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CheckExistingService } from './check-existing.service';

describe('CheckExistingService', () => {
  let service: CheckExistingService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: spy }
      ]
    });
    service = TestBed.inject(CheckExistingService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('the checkExisting method', () => {
    it('should return true, indicating that there is a registered ong', () => {
      const signOngs = [
        {user: 'OngBrasil', cnpj: '12312312312312'},
        {user: 'AmigosBem', cnpj: '12312752312312'}
      ];

      const sentOng = 'OngBrasil';

      httpClientSpy.get.and.returnValue(of(signOngs));

      service.checkExistingData(sentOng, 'user').subscribe((data) => {
        expect(data[0]).toEqual(true);
      })
    })
  })
});
