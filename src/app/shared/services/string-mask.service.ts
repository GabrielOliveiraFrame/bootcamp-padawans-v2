import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringMaskService {

  constructor() { }

  stringTransform(value: string, formatter: any){
    value = value.replace(/[^0-9]/g, '');
    return formatter.apply(value);
  }
}
