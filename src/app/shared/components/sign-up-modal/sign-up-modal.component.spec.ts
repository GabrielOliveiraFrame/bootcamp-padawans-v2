import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { OngsService } from '../../services/ongs.service';

import { SignUpModalComponent } from './sign-up-modal.component';
import { NumbersUtilService } from '../../util/numbers-util.service';
import { CheckExistingService } from '../../services/check-existing.service';
import { of } from 'rxjs';

describe('SignUpModalComponent', () => {
  let component: SignUpModalComponent;
  let fixture: ComponentFixture<SignUpModalComponent>;

  let ongsServiceSpy: jasmine.SpyObj<OngsService>;
  let checkExistingServiceSpy: jasmine.SpyObj<CheckExistingService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const ongsServiceSpyObj = jasmine.createSpyObj('OngsService', ['createOng']);
    const checkExistingServiceSpyObj = jasmine.createSpyObj('CheckExistingService', ['checkExistingData']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ SignUpModalComponent ],
      providers: [
        { provide: OngsService, useValue: ongsServiceSpyObj },
        { provide: CheckExistingService, useValue: checkExistingServiceSpyObj },
        { provide: Router, useValue: routerSpyObj },
        FormBuilder
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.inject(FormBuilder);
    TestBed.inject(NumbersUtilService);

    ongsServiceSpy = TestBed.inject(OngsService) as jasmine.SpyObj<OngsService>;
    checkExistingServiceSpy = TestBed.inject(CheckExistingService) as jasmine.SpyObj<CheckExistingService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('the onSubmit method', () => {
    it('should succes receive true', () => {
      checkExistingServiceSpy.checkExistingData.and.returnValue(of([]));

      component.formulario.get('user')?.setValue('OngBrasil');
      component.formulario.get('cnpj')?.setValue('11.000.000/0000-00');
      component.formulario.get('email')?.setValue('email@emailtest.com');
      component.formulario.get('phone')?.setValue('(11) 99999-9999');
      component.formulario.get('imageLink')?.setValue('test');
      component.formulario.get('description')?.setValue('test');
      component.formulario.get('password')?.setValue('test');
      component.formulario.get('confirmPassword')?.setValue('test');


      ongsServiceSpy.createOng.and.returnValue(of(component.formModel));

      component.onSubmit();

      expect(component.success).toBeTruthy();
    });

    it('should form.valid to be falsy', () => {
      checkExistingServiceSpy.checkExistingData.and.returnValue(of([true]));

      component.formulario.get('user')?.setValue('OngBrasil');
      component.formulario.get('cnpj')?.setValue('11.000.000/0000');
      component.formulario.get('email')?.setValue('email@emailtest.com');
      component.formulario.get('phone')?.setValue('(11) 99999');
      component.formulario.get('imageLink')?.setValue('test');
      component.formulario.get('description')?.setValue('test');
      component.formulario.get('password')?.setValue('test');
      component.formulario.get('confirmPassword')?.setValue('test');

      component.onSubmit();

      expect(component.formulario.valid).toBeFalsy();
    })
  });

});
