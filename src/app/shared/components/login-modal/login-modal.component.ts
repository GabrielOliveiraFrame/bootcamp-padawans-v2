import { setUpdateNavTrue } from '../../../../ngrx';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginFormModel } from '../../models/login-form-model';
import { OngsService } from '../../services/ongs.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  formulario!: FormGroup;

  formModel: LoginFormModel = new LoginFormModel()

  userName!: string;

  serverPassword!: string;

  rejectedLogin: boolean = false;

  @ViewChild('closeBtn') closeBtn!: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private ongsService: OngsService,
    private store: Store<{updateRequest: boolean}>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit(){
    this.checkValidations();

    if(this.formulario.valid){
      this.formModel.user = this.formulario.get('user')?.value;
      this.formModel.password = this.formulario.get('password')?.value;

      this.checkUserAuth(this.formModel.user, this.formModel.password);
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

  checkUserAuth(user: string, password: string): any{
    this.ongsService.getByUser(user)
      .subscribe((data: any) => {
        if(data[0]?.password == password){
          this.confirmLogin();
        } else{
          this.rejectedLogin = true;
        }
      })
  }

  navigate(){
    this.router.navigate(['public/dashboard']);
  }

  confirmLogin(){

    this.userName = this.formulario.get('user')?.value;
    localStorage.setItem('userName', this.userName);

    this.store.dispatch(setUpdateNavTrue());

    this.resetaForm();
    this.closeModal();
    this.navigate();
  }

}
