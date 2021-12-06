import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { SignUpFormModel } from '../../models/sign-up-form-model';
import { CheckExistingService } from '../../services/check-existing.service';
import { OngsService } from '../../services/ongs.service';
import { NumbersUtilService } from '../../util/numbers-util.service';
import { FormValidations } from '../../validations/formValidations';
import { Masks } from '../../validations/masks';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.css']
})
export class SignUpModalComponent implements OnInit {

  formulario!: FormGroup;

  formModel: SignUpFormModel = new SignUpFormModel();

  @ViewChild('closeBtn') closeBtn!: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private ongsService: OngsService,
    private numbersUtilService: NumbersUtilService,
    private checkExistingService: CheckExistingService,
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      user: [null, [Validators.required], [this.checkExistingData('user').bind(this)]],
      cnpj: [null, [Validators.required, FormValidations.maskValidate(Masks.cnpjMask)]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, FormValidations.maskValidate(Masks.phoneMask)]],
      imageLink: [null, [Validators.required]],
      description: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [FormValidations.equalsTo('password')]]
    });

  }

  onSubmit(){
    this.checkValidations();

    if(!this.formulario.valid){
      // console.log(this.formulario);
      return
    } else{
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

  checkExistingData(name: string){
    const validator = (formControl: FormControl) => {
      return this.checkExistingService.checkExistingData(formControl.value, name).pipe(
        map((result: any) => result ? {existingData : true} : console.log(result))
      )
    }

    return validator;
  }

}
