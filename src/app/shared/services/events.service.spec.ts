import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EventFormModel } from '../models/event-form-model';

import { EventsService } from './events.service';

describe(EventsService.name, () => {
  let service: EventsService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get', 'post']);

    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: spy}
      ]
    });
    service = TestBed.inject(EventsService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`the #${EventsService.prototype.getAll.name} method`, () => {
    it('should return all the events', () => {
      const expectedEvents = [
        {title: 'Ajuda Brasil', local: 'Parque Qualquer'},
        {title: 'Ano Novo Feliz', local: 'Frame'}
      ];

      httpClientSpy.get.and.returnValue(of(expectedEvents));

      service.getAll().subscribe((data) => {
        expect(data).toEqual(expectedEvents);
      });
      expect(httpClientSpy.get.calls.count()).toBe(1);
    });
  });

  describe(`the #${EventsService.prototype.createEvent.name} method`, () => {
    it('should create a event', () => {
      const event = new EventFormModel();

      httpClientSpy.post.and.returnValue(of(event));

      service.createEvent(event).subscribe((data) => {
        expect(data).toEqual(event);
      });

      expect(httpClientSpy.post.calls.count()).toBe(1);
    })
  })
});
