import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event-modal',
  templateUrl: './create-event-modal.component.html',
  styleUrls: ['./create-event-modal.component.css']
})
export class CreateEventModalComponent implements OnInit {

  formulario!: FormGroup;

  userName!: string;

  @ViewChild('closeBtn') closeBtn!: ElementRef;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      name: [null, [Validators.required]],
      local: [null, [Validators.required]],
      start: [null, [Validators.required]],
      hour: [null, [Validators.required]],
      donations: [null, [Validators.required]],
    });

  }

  onSubmit(){
    this.checkValidations();

    if(!this.formulario.valid){
      return;
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
