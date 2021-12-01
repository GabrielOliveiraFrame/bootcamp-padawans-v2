import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone/phone.pipe';
import { HourPipe } from './hour/hour.pipe';


@NgModule({
  declarations: [
    PhonePipe,
    HourPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PhonePipe,
    HourPipe
  ]
})
export class PipesModule { }
