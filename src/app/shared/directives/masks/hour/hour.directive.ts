import { Directive, HostListener, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as StringMask from 'string-mask';

@Directive({
  selector: '[hourMask]'
})
export class HourDirective {

  delete: boolean = false;

  hourMask = new StringMask('00:00');

  constructor() {}

  @Input()
  control!: AbstractControl | null;

  @HostListener('input')
  onChange(): void{
    this.transform(this.control?.value);
  }

  @HostListener('keydown.backspace')
  deletePress() {
    this.delete = true;
  }

  @HostListener('keyup.backspace')
  deleteUp() {
    this.delete = false;
  }

  transform(value: string): void {

    if(!this.delete){

      value = value.replace(/[^0-9]/g, '');
      let result = this.hourMask.apply(value);
      
      this.control?.setValue(result);
    }
  }

}
