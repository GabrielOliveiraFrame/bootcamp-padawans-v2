import { Directive, HostListener, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { StringMaskService } from '../../services/string-mask.service';
import { Masks } from '../../validations/masks';

@Directive({
  selector: '[hourMask]'
})
export class HourDirective {

  delete: boolean = false;

  constructor(private stringMaskService: StringMaskService) {}

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

      let result = this.stringMaskService.stringTransform(value, Masks.hourMask);
      this.control?.setValue(result);
    }
  }

}
