import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { OngsService } from '../../services/ongs.service';

import { NotLogComponent } from './not-log.component';

describe(NotLogComponent.name, () => {
  let component: NotLogComponent;
  let fixture: ComponentFixture<NotLogComponent>;

  let routerSpy: jasmine.SpyObj<Router>;
  let ongsServiceSpy: jasmine.SpyObj<OngsService>;

  beforeEach(async () => {
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const ongsServiceSpyObj ={
      createdOng: of(true)
    }

    await TestBed.configureTestingModule({
      declarations: [ NotLogComponent ],
      providers: [
        { provide: Router, useValue: routerSpyObj },
        { provide: OngsService, useValue: ongsServiceSpyObj },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    routerSpy = TestBed.inject(Router)  as jasmine.SpyObj<Router>;
    ongsServiceSpy = TestBed.inject(OngsService) as jasmine.SpyObj<OngsService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sigUpSuccess receive true', () => {
    expect(component.signUpSuccess).toEqual(true);
  });

  describe(`the #${NotLogComponent.prototype.navigate.name} method`, () => {
    it('should router navigate to have been called with public/sign-up', () => {
      component.navigate();

      expect(routerSpy.navigate).toHaveBeenCalledWith(['public/sign-up']);
    })
  })

});
