import { Store } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { LoggedComponent } from './logged.component';

describe(LoggedComponent.name, () => {
  let component: LoggedComponent;
  let fixture: ComponentFixture<LoggedComponent>;

  beforeEach(async () => {
    const mockedValue = { updateNavRequest: true };
    const storeSubjectMock = new BehaviorSubject(mockedValue);
    const mockedStore = {
      pipe: () => storeSubjectMock.asObservable(),
      dispatch: () => {}
    };

    await TestBed.configureTestingModule({
      declarations: [ LoggedComponent ],
      providers: [
        { provide: Store, useValue: mockedStore },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.inject(Store);

    localStorage.setItem('userName', 'OngBrasil');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should success receive true', () => {
    expect(component.success).toBeTruthy();
  })

  describe(`the #${LoggedComponent.prototype.closeLog.name} method`, () => {
    it('should ongName to be undefined', () => {
      component.closeLog();
      expect(localStorage.getItem('userName')).toBeNull();
    })
  })
});
