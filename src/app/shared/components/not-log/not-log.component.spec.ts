import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { OngsService } from '../../services/ongs.service';

import { NotLogComponent } from './not-log.component';

describe('NotLogComponent', () => {
  let component: NotLogComponent;
  let fixture: ComponentFixture<NotLogComponent>;

  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ NotLogComponent ],
      providers: [
        { provide: Router, useValue: routerSpyObj},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    routerSpy = TestBed.inject(Router)  as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
