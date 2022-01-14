import { AbstractControl} from '@angular/forms';
import { Directive, HostListener, Input } from '@angular/core';
import * as StringMask from 'string-mask';

@Directive({
  selector: '[phoneMask]'
})
export class PhoneDirective{

  delete: boolean = false;

  phoneMask = new StringMask('(00) 90000-0000');

  onlyNumbers!: any;

  constructor() {}

  @Input()
  control!: AbstractControl | null;

  @HostListener('ngModelChange')
  onChange(): void{
    this.onlyNumbers = this.control?.value.replace(/[^0-9]/g, '');
    this.transform(this.onlyNumbers);
  }

  @HostListener('keydown.backspace')
  deletePress() {
    this.delete = true;
  }

  @HostListener('keyup.backspace')
  deleteUp() {
    this.delete = false;

    this.onlyNumbers = this.control?.value.replace(/[^0-9]/g, '');
    if(this.onlyNumbers.length === 10 || this.onlyNumbers.length === 11) {
      this.transform(this.onlyNumbers);
    }
  }

  transform(value: any): void {
    if(!this.delete){
      let result = this.phoneMask.apply(value);
      this.control?.setValue(result);
    }
  }
}

