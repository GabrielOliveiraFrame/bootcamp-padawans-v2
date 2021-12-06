import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersUtilService {

  constructor() { }

  onlyNumbers(value: string){
    return value = value.replace(/[^0-9]/g, '');
  }
}
