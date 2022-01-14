import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { RedirectCreateEventsComponent } from './redirect-create-events.component';

describe('RedirectCreateEventsComponent', () => {
  let component: RedirectCreateEventsComponent;
  let fixture: ComponentFixture<RedirectCreateEventsComponent>;

  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const mockedValue = { updateNavRequest: true };
    const storeSubjectMock = new BehaviorSubject(mockedValue);
    const mockedStore = {
      pipe: () => storeSubjectMock.asObservable(),
    };

    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ RedirectCreateEventsComponent ],
      providers: [
        { provide: Store, useValue: mockedStore },
        { provide: Router, useValue: routerSpyObj },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectCreateEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.inject(Store);
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update$ data to equal true', () => {
    component.update$.subscribe((data:any) => {
      expect(data.updateNavRequest).toBeTruthy();
    })
  })
});
