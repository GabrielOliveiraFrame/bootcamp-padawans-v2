import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setUpdateEventsRequestTrue } from 'src/ngrx';
import { EventFormModel } from '../../models/event-form-model';
import { EventsService } from '../../services/events.service';
import { NumbersUtilService } from '../../util/numbers-util.service';
import { FormValidations } from '../../validations/formValidations';

@Component({
  selector: 'app-create-event-modal',
  templateUrl: './create-event-modal.component.html',
  styleUrls: ['./create-event-modal.component.css']
})
export class CreateEventModalComponent implements OnInit {

  formulario!: FormGroup;

  formModel: EventFormModel = new EventFormModel();

  userName!: string;

  success!: boolean;

  @ViewChild('closeBtn') closeBtn!: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private eventsService: EventsService,
    private numbersUtilService: NumbersUtilService,
    private store: Store<{updateRequest: boolean}>
  ) { }

  ngOnInit(): void {

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
        this.closeModal();

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

  closeModal(){
    this.closeBtn.nativeElement.click();
  }

}
