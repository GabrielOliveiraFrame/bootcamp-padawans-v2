import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventFormModel } from '../../models/event-form-model';
import { EventsService } from '../../services/events.service';
import { FormValidations } from '../../validations/formValidations';
import { Masks } from '../../validations/masks';

@Component({
  selector: 'app-create-event-modal',
  templateUrl: './create-event-modal.component.html',
  styleUrls: ['./create-event-modal.component.css']
})
export class CreateEventModalComponent implements OnInit {

  formulario!: FormGroup;

  formModel: EventFormModel = new EventFormModel();

  userName!: string;

  @ViewChild('closeBtn') closeBtn!: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      title: [null, [Validators.required]],
      local: [null, [Validators.required]],
      start: [null, [Validators.required]],
      hour: [null, [Validators.required, FormValidations.maskValidate(Masks.hourMask)]],
      donations: [null, [Validators.required]],
    });

  }

  onSubmit(){
    this.checkValidations();

    if(!this.formulario.valid){
      return;
    } else{
      this.formModel.title = this.formulario.get('title')?.value;
      this.formModel.local = this.formulario.get('local')?.value;
      this.formModel.start = this.formulario.get('start')?.value;
      this.formModel.hour = this.formulario.get('hour')?.value;
      this.formModel.donations = this.formulario.get('donations')?.value;

      this.eventsService.createEvent(this.formModel).subscribe((data: any) => {
        this.resetaForm();
        this.closeModal();
        
        location.reload();
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
