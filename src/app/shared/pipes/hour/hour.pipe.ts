import { Masks } from './../../validations/masks';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hour'
})
export class HourPipe implements PipeTransform {

  transform(value: string): string {
    let result = Masks.hourMask.apply(value);
    return result;
  }

}
