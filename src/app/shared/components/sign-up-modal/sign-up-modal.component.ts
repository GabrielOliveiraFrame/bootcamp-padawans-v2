import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { SignUpFormModel } from '../../models/sign-up-form-model';
import { CheckExistingService } from '../../services/check-existing.service';
import { OngsService } from '../../services/ongs.service';
import { NumbersUtilService } from '../../util/numbers-util.service';
import { FormValidations } from '../../validations/formValidations';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.css']
})
export class SignUpModalComponent implements OnInit {

  formulario!: FormGroup;

  formModel: SignUpFormModel = new SignUpFormModel();

  success!: boolean;

  @ViewChild('closeBtn') closeBtn!: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private ongsService: OngsService,
    private numbersUtilService: NumbersUtilService,
    private checkExistingService: CheckExistingService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      user: [null, [Validators.required], [this.checkExistingDataString('user').bind(this)]],
      cnpj: [null, [Validators.required, FormValidations.maskValidate('00.000.000/0000-00')],
      [this.checkExistingDataNumber('cnpj').bind(this)]],
      email: [null, [Validators.required, Validators.email], [this.checkExistingDataString('email').bind(this)]],
      phone: [null, [Validators.required, FormValidations.maskValidate('(00) 90000-0000')],
      [this.checkExistingDataNumber('phone').bind(this)]],
      imageLink: [null, [Validators.required]],
      description: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [FormValidations.equalsTo('password')]]
    });

  }

  onSubmit(){
    this.checkValidations();

    if(this.formulario.valid){
      this.formModel.user = this.formulario.get('user')?.value;
      this.formModel.cnpj = this.numbersUtilService.onlyNumbers(this.formulario.get('cnpj')?.value);
      this.formModel.email = this.formulario.get('email')?.value;
      this.formModel.phone = this.numbersUtilService.onlyNumbers(this.formulario.get('phone')?.value);
      this.formModel.imageLink = this.formulario.get('imageLink')?.value
      this.formModel.description = this.formulario.get('description')?.value;
      this.formModel.password = this.formulario.get('password')?.value;

      this.ongsService.createOng(this.formModel).subscribe((data: any) => {
        this.resetaForm();
        this.closeModal();

        this.success = true;

        this.router.navigate(['/public/dashboard']);
      })
    }
  }

  checkValidations(){
    Object.keys(this.formulario.controls).forEach(c => {
      const controle = this.formulario.get(c);

      controle?.markAsDirty();
    })
  }

  resetaForm(){
    this.formulario.reset();
  }

  closeModal(){
    this.closeBtn.nativeElement.click();
  }

  checkExistingDataString(name: string){
    const validator = (formControl: FormControl) => {
      return this.checkExistingService.checkExistingData(formControl.value, name).pipe(
        map((result: any) => {
          return result[0] ? {existingData: true} : null;
        })
      )
    }

    return validator;
  }

  checkExistingDataNumber(name: string){
    const validator = (formControl: FormControl) => {
      let onlyNumbers = formControl.value.replace(/[^0-9]/g, '');
      return this.checkExistingService.checkExistingData(onlyNumbers, name).pipe(
        map((result: any) => {
          return result[0] ? {existingData: true} : null;
        })
      )
    }

    return validator;
  }
}
