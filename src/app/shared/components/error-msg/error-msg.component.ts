import { Component, Input, OnInit } from '@angular/core';
import { FormValidations } from '../../validations/formValidations';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  @Input()
  label!: string;

  @Input()
  control!: any;

  constructor() { }

  ngOnInit(): void {}

  get errorMessage(){
    for (const propertyName in this.control?.errors) {

      if (this.control?.touched || this.control?.dirty) {
        return FormValidations.getErrorMsg(this.label, propertyName);
      } else{
        return null;
      }
    }
  }

}
