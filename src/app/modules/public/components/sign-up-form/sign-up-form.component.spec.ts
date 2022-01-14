import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { CheckExistingService } from 'src/app/shared/services/check-existing.service';
import { OngsService } from 'src/app/shared/services/ongs.service';
import { NumbersUtilService } from 'src/app/shared/util/numbers-util.service';

import { SignUpFormComponent } from './sign-up-form.component';

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;

  let ongsServiceSpy: jasmine.SpyObj<OngsService>;
  let checkExistingServiceSpy: jasmine.SpyObj<CheckExistingService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const ongsServiceSpyObj = jasmine.createSpyObj('OngsService', ['createOng']);
    const checkExistingServiceSpyObj = jasmine.createSpyObj('CheckExistingService', ['checkExistingData']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ SignUpFormComponent ],
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
    fixture = TestBed.createComponent(SignUpFormComponent);
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
    it('should call the navigate method', () => {
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

      expect(routerSpy.navigate).toHaveBeenCalled();
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
