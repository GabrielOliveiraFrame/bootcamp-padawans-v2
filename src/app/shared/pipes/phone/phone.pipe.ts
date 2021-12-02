import { Masks } from './../../validations/masks';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    let result = Masks.phoneMask.apply(value);
    return result;
  }

}
