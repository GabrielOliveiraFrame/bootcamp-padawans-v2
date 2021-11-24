import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  formulario!: FormGroup;

  userName!: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

  }

  onSubmit(){
    this.checkValidations();

    if(!this.formulario.valid){
      return
    } else{
      this.userName = this.formulario.get('user')?.value;
      this.resetaForm();
      window.localStorage.setItem('userName', this.userName);
      window.location.reload();
    }
  }

  checkValidations(){
    Object.keys(this.formulario.controls).forEach(c => {
      const controle = this.formulario.get(c);

      console.log(controle);

      controle?.markAsDirty();
    })
  }

  resetaForm(){
    this.formulario.reset();
  }

}
