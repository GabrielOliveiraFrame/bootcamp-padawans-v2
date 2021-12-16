import { AbstractControl} from '@angular/forms';
import { Directive, HostListener, Input } from '@angular/core';
import * as StringMask from 'string-mask';

@Directive({
  selector: '[phoneMask]'
})
export class PhoneDirective{

  delete: boolean = false;

  phoneMask = new StringMask('(00) 90000-0000');

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
      let result = this.phoneMask.apply(value);
      this.control?.setValue(result);
    }
  }
}

