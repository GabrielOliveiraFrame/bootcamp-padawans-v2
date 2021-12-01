import { AbstractControl, NgControl} from '@angular/forms';
import { Directive, HostListener, Input } from '@angular/core';
import * as StringMask from 'string-mask';

@Directive({
  selector: '[phone]'
})
export class PhoneDirective {

  formatter = new StringMask('(00) 0000-00000');

  delete: boolean = false;

  // isValid = false;

  constructor(private display: NgControl) { }

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
    // this.control?.addValidators(this.validate);

    if(!this.delete){

      let internalString: string = value;

      internalString = internalString.replace(/[^0-9]/g, '');

      let result = this.formatter.apply(internalString);

      // this.isValid = this.formatter.validate(internalString);

      this.display.valueAccessor?.writeValue(result);
    }
  }

  // validate(): ValidationErrors | null {
  //   return isValid ? null : {'invalid': true};
  // }
}

