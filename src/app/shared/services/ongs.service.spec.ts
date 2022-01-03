import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SignUpFormModel } from '../models/sign-up-form-model';

import { OngsService } from './ongs.service';

describe('OngsService', () => {
  let service: OngsService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get', 'post']);

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: spy }
      ]
    });
    service = TestBed.inject(OngsService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('the getAll method', () => {
    it('should return all the ongs', () => {
      const expectedOngs = [
        {user: 'OngBrasil', cnpj: '12312312312312'},
        {user: 'AmigosBem', cnpj: '12312752312312'}
      ];

      httpClientSpy.get.and.returnValue(of(expectedOngs));

      service.getAll().subscribe((data) => {
        expect(data).toEqual(expectedOngs);
      });
      expect(httpClientSpy.get.calls.count()).toBe(1);
    });
  });

  describe('the createOng method', () => {
    it('should create a ong', () => {
      const ong = new SignUpFormModel();

      httpClientSpy.post.and.returnValue(of(ong));

      service.createOng(ong).subscribe((data) => {
        expect(data).toEqual(ong);
      });

      expect(httpClientSpy.post.calls.count()).toBe(1);
    });
  });

  describe('the getByUser method', () => {
    it('should return the ong filtered by user', () => {
      const user = 'OngBrasil';
      const expectedOng = [{user: 'OngBrasil',  cnpj: '12312312312312'}];

      httpClientSpy.get.and.returnValue(of(expectedOng));

      service.getByUser(user).subscribe((data) => {
        expect(data).toEqual(expectedOng);
      });
      expect(httpClientSpy.get.calls.count()).toBe(1);
    });
  });
});
