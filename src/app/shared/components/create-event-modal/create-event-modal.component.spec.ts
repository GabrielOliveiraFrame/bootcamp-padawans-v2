import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { EventsService } from '../../services/events.service';
import { NumbersUtilService } from '../../util/numbers-util.service';

import { CreateEventModalComponent } from './create-event-modal.component';

describe('CreateEventModalComponent', () => {
  let component: CreateEventModalComponent;
  let fixture: ComponentFixture<CreateEventModalComponent>;

  let fb: FormBuilder;
  let eventsServiceSpy: jasmine.SpyObj<EventsService>;
  let numbersUtilServiceSpy: jasmine.SpyObj<NumbersUtilService>;
  let storeSpy: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    const eventsSpyObj = jasmine.createSpyObj('EventsService', ['createEvent']);
    const numbersSpyObj = jasmine.createSpyObj('NumbersUtilService', ['onlyNumbers']);
    const storeSpyObj = jasmine.createSpyObj('Store', ['dispatch']);

    await TestBed.configureTestingModule({
      declarations: [ CreateEventModalComponent ],
      providers: [
        FormBuilder,
        {provide: EventsService, useValue: eventsSpyObj},
        {provide: NumbersUtilService, useValue: numbersSpyObj},
        {provide: Store, useValue: storeSpyObj}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fb = TestBed.inject(FormBuilder);
    eventsServiceSpy = TestBed.inject(EventsService) as jasmine.SpyObj<EventsService>;
    numbersUtilServiceSpy = TestBed.inject(NumbersUtilService) as jasmine.SpyObj<NumbersUtilService>;
    storeSpy = TestBed.inject(Store) as jasmine.SpyObj<Store>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('the onSubmit method', () => {
    it('should component.sucess == true', () => {
      component.formulario.get('title')?.setValue('test');
      component.formulario.get('local')?.setValue('test');
      component.formulario.get('start')?.setValue('22-10-2022');
      component.formulario.get('hour')?.setValue('18:00');
      component.formulario.get('donations')?.setValue('test');

      eventsServiceSpy.createEvent.and.returnValue(of(component.formModel));

      component.onSubmit();

      expect(component.success).toBeTruthy();
    })
  })
});
