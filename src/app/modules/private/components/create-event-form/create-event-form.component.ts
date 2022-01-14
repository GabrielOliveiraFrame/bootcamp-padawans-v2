import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EventFormModel } from 'src/app/shared/models/event-form-model';
import { EventsService } from 'src/app/shared/services/events.service';
import { NumbersUtilService } from 'src/app/shared/util/numbers-util.service';
import { FormValidations } from 'src/app/shared/validations/formValidations';
import { setUpdateEventsRequestTrue } from 'src/ngrx';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.css']
})
export class CreateEventFormComponent implements OnInit {

  formulario!: FormGroup;

  formModel: EventFormModel = new EventFormModel();

  userName!: string;

  success!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private eventsService: EventsService,
    private numbersUtilService: NumbersUtilService,
    private store: Store<{updateRequest: boolean}>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      title: [null, [Validators.required]],
      local: [null, [Validators.required]],
      start: [null, [Validators.required]],
      hour: [null, [Validators.required, FormValidations.maskValidate('00:00')]],
      donations: [null, [Validators.required]],
    });
  }

  onSubmit(){
    this.checkValidations();

    if(this.formulario.valid){
      this.formModel.title = this.formulario.get('title')?.value;
      this.formModel.local = this.formulario.get('local')?.value;
      this.formModel.start = this.formulario.get('start')?.value;
      this.formModel.hour = this.numbersUtilService.onlyNumbers(this.formulario.get('hour')?.value);
      this.formModel.donations = this.formulario.get('donations')?.value;

      this.eventsService.createEvent(this.formModel).subscribe((data: any) => {
        this.resetaForm();

        this.store.dispatch(setUpdateEventsRequestTrue());

        this.success = true;
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

  navigate(){
    this.router.navigate(['public/dashboard']);
  }

}
