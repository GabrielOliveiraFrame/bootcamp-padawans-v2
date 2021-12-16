import { Pipe, PipeTransform } from '@angular/core';
import * as StringMask from 'string-mask';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    let phoneMask = new StringMask('(00) 90000-0000');
    let result = phoneMask.apply(value);
    return result;
  }

}
