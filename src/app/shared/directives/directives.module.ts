import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneDirective } from './masks/phone/phone.directive';
import { CnpjDirective } from './masks/cnpj/cnpj.directive';
import { HourDirective } from './masks/hour/hour.directive';



@NgModule({
  declarations: [
    PhoneDirective,
    CnpjDirective,
    HourDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhoneDirective,
    CnpjDirective,
    HourDirective
  ]
})
export class DirectivesModule { }
