import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneDirective } from './phone/phone.directive';
import { CnpjDirective } from './cnpj/cnpj.directive';
import { HourDirective } from './hour/hour.directive';



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
