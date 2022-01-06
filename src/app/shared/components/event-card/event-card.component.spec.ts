import { Store } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsService } from '../../services/events.service';

import { EventCardComponent } from './event-card.component';
import { BehaviorSubject, of } from 'rxjs';

describe('EventCardComponent', () => {
  let component: EventCardComponent;
  let fixture: ComponentFixture<EventCardComponent>;

  let eventsServiceSpy: jasmine.SpyObj<EventsService>;

  beforeEach(async () => {
    const eventsSpyObj = jasmine.createSpyObj('EventsService', ['getAll']);

    const mockedValue = { updateEventsRequest: true };
    const storeSubjectMock = new BehaviorSubject(mockedValue);
    const mockedStore = {
      pipe: () => storeSubjectMock.asObservable(),
    };

    await TestBed.configureTestingModule({
      declarations: [ EventCardComponent ],
      providers: [
        { provide: EventsService, useValue: eventsSpyObj },
        { provide: Store, useValue: mockedStore },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    eventsServiceSpy = TestBed.inject(EventsService) as jasmine.SpyObj<EventsService>;
    TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should updateRequest$ data.updateEventsRequest to equal true', () => {
    component.updateEvents$.subscribe((data: any) => {
      expect(data.updateEventsRequest).toBeTruthy();
    })
  });

  describe('the openSelectedCard method', () => {
    it('should cardId receive the id(parameter)', () => {
      const expectedId = 1;

      component.openSelectedCard(expectedId);
      expect(component.cardId).toEqual(expectedId);
    });
  });

  describe('the closeSelectedCard method', () => {
    it('should cardId receive null', () => {
      component.closeSelectedCard();
      expect(component.cardId).toBeNull();
    });
  });
});


