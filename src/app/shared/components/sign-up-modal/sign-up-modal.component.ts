import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidations } from '../../validations/formValidations';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.css']
})
export class SignUpModalComponent implements OnInit {

  formulario!: FormGroup;

  @ViewChild('closeBtn') closeBtn!: ElementRef;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      name: [null, [Validators.required]],
      cnpj: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required]],
      description: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [FormValidations.equalsTo('password')]]
    });

  }

  onSubmit(){
    this.checkValidations();

    if(!this.formulario.valid){
      return
    } else{
      this.resetaForm();
      this.closeModal();

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

}
