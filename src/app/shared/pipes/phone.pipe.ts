import { Pipe, PipeTransform } from '@angular/core';
// import * as StringMask from 'string-mask';


@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    // var formatter = new StringMask('(00) 0000-0000');
    // var result = formatter.apply(value);

    // return result;
    return 'Teste';
  }

}
