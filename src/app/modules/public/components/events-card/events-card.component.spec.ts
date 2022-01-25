import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { EventsService } from 'src/app/shared/services/events.service';

import { EventsCardComponent } from './events-card.component';

describe(EventsCardComponent.name, () => {
  let component: EventsCardComponent;
  let fixture: ComponentFixture<EventsCardComponent>;

  let eventsServiceSpy: jasmine.SpyObj<EventsService>;

  beforeEach(async () => {
    const eventsSpyObj = jasmine.createSpyObj('EventsService', ['getAll']);

    const mockedValue = { updateEventsRequest: true };
    const storeSubjectMock = new BehaviorSubject(mockedValue);
    const mockedStore = {
      pipe: () => storeSubjectMock.asObservable(),
    };

    await TestBed.configureTestingModule({
      declarations: [ EventsCardComponent ],
      providers: [
        { provide: EventsService, useValue: eventsSpyObj },
        { provide: Store, useValue: mockedStore },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCardComponent);
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

  describe(`the #${EventsCardComponent.prototype.openSelectedCard.name} method`, () => {
    it('should cardId receive the id(parameter)', () => {
      const expectedId = 1;

      component.openSelectedCard(expectedId);
      expect(component.cardId).toEqual(expectedId);
    });
  });

  describe(`the #${EventsCardComponent.prototype.closeSelectedCard.name} method`, () => {
    it('should cardId receive null', () => {
      component.closeSelectedCard();
      expect(component.cardId).toBeNull();
    });
  });
});
