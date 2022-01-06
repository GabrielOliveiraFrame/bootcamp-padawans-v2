import { Store } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';

import { RedirectCreateEventComponent } from './redirect-create-event.component';

describe('RedirectCreateEventComponent', () => {
  let component: RedirectCreateEventComponent;
  let fixture: ComponentFixture<RedirectCreateEventComponent>;

  beforeEach(async () => {
    const mockedValue = { updateNavRequest: true };
    const storeSubjectMock = new BehaviorSubject(mockedValue);
    const mockedStore = {
      pipe: () => storeSubjectMock.asObservable(),
    };

    await TestBed.configureTestingModule({
      declarations: [ RedirectCreateEventComponent ],
      providers: [
        { provide: Store, useValue: mockedStore }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.inject(Store);
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
