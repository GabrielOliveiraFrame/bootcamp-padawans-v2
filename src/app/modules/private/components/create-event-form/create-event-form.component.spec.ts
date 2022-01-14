import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { EventsService } from 'src/app/shared/services/events.service';
import { NumbersUtilService } from 'src/app/shared/util/numbers-util.service';

import { CreateEventFormComponent } from './create-event-form.component';

describe('CreateEventFormComponent', () => {
  let component: CreateEventFormComponent;
  let fixture: ComponentFixture<CreateEventFormComponent>;

  let fb: FormBuilder;
  let eventsServiceSpy: jasmine.SpyObj<EventsService>;
  let numbersUtilServiceSpy: jasmine.SpyObj<NumbersUtilService>;
  let storeSpy: jasmine.SpyObj<Store>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const eventsSpyObj = jasmine.createSpyObj('EventsService', ['createEvent']);
    const numbersSpyObj = jasmine.createSpyObj('NumbersUtilService', ['onlyNumbers']);
    const storeSpyObj = jasmine.createSpyObj('Store', ['dispatch']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ CreateEventFormComponent ],
      providers: [
        FormBuilder,
        {provide: EventsService, useValue: eventsSpyObj},
        {provide: NumbersUtilService, useValue: numbersSpyObj},
        {provide: Store, useValue: storeSpyObj},
        {provide: Router, useValue: routerSpyObj}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fb = TestBed.inject(FormBuilder);
    eventsServiceSpy = TestBed.inject(EventsService) as jasmine.SpyObj<EventsService>;
    numbersUtilServiceSpy = TestBed.inject(NumbersUtilService) as jasmine.SpyObj<NumbersUtilService>;
    storeSpy = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
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
