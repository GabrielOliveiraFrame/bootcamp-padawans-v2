import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneDirective } from './phone/phone.directive';



@NgModule({
  declarations: [
    PhoneDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhoneDirective
  ]
})
export class DirectivesModule { }
