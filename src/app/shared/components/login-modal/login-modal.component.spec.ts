import { Store } from '@ngrx/store';
import { OngsService } from './../../services/ongs.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { LoginModalComponent } from './login-modal.component';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe(LoginModalComponent.name, () => {
  let component: LoginModalComponent;
  let fixture: ComponentFixture<LoginModalComponent>;

  let ongsServiceSpy: jasmine.SpyObj<OngsService>;
  let storeSpy: jasmine.SpyObj<Store>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const ongsServiceSpyObj = jasmine.createSpyObj('OngsService', ['getByUser']);
    const storeSpyObj = jasmine.createSpyObj('Store', ['dispatch']);

    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ LoginModalComponent ],
      providers: [
        { provide: OngsService, useValue: ongsServiceSpyObj },
        { provide: Store, useValue: storeSpyObj },
        { provide: Router, useValue: routerSpyObj},
        FormBuilder
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.inject(FormBuilder);
    ongsServiceSpy = TestBed.inject(OngsService) as jasmine.SpyObj<OngsService>;
    storeSpy = TestBed.inject(Store) as jasmine.SpyObj<Store>;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`the #${LoginModalComponent.prototype.onSubmit.name} method`, () => {
    it('should rejectedLogin stay false', () => {
      component.formulario.get('user')?.setValue('OngBrasil');
      component.formulario.get('password')?.setValue('brasil123');

      ongsServiceSpy.getByUser.and.returnValue(of([{user: 'OngBrasil', password: 'brasil123'}]));

      component.onSubmit();

      expect(component.rejectedLogin).toBeFalsy();
    });

    it('should rejectedLogin receive true', () => {
      component.formulario.get('user')?.setValue('OngBrasil');
      component.formulario.get('password')?.setValue('brasil123');

      ongsServiceSpy.getByUser.and.returnValue(of([{user: 'OngBrasil', password: 'brasil321'}]));

      component.onSubmit();

      expect(component.rejectedLogin).toBeTruthy();
    })
  })
});
