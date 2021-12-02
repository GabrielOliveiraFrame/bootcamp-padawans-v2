import * as StringMask from 'string-mask';


export class Masks
{
  static phoneMask = new StringMask('(00) 0000-0000');
  static hourMask = new StringMask('00:00');
  static cnpjMask = new StringMask('00.000.000/0000-00');
}
