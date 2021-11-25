import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  formulario!: FormGroup;

  userName!: string;

  @ViewChild('closeBtn') closeBtn!: ElementRef;

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
      localStorage.setItem('userName', this.userName);

      this.resetaForm();
      this.closeModal();

      //para atualizar o componente mostrado
      location.reload();
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
