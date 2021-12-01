import { Pipe, PipeTransform } from '@angular/core';
import * as StringMask from 'string-mask';

@Pipe({
  name: 'hour'
})
export class HourPipe implements PipeTransform {

  transform(value: string): string {
    let formatter = new StringMask('00:00');
    let result = formatter.apply(value);

    return result;
  }

}
