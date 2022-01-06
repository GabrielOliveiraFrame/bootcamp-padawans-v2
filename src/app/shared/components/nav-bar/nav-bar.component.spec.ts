import { Store } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    const mockedValue = { updateNavRequest: true };
    const storeSubjectMock = new BehaviorSubject(mockedValue);
    const mockedStore = {
      pipe: () => storeSubjectMock.asObservable(),
    };

    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      providers: [
        { provide: Store, useValue: mockedStore }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show receive false', () => {
    localStorage.removeItem('userName');
    component.ngOnInit();
    expect(component.show).toBeFalsy();
  });

  it('should show receive true', () => {
    localStorage.setItem('userName', 'OngBrasil');
    component.ngOnInit();
    expect(component.show).toBeTruthy();
  });
});
