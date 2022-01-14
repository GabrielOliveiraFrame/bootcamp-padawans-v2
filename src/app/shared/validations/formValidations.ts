import {FormControl } from "@angular/forms";
import * as StringMask from 'string-mask';

export class FormValidations
{
  static equalsTo(otherField: string){
    const validator = (formControl: FormControl) => {
      const field = formControl.root.get(otherField) as FormControl;

      if(field?.value !== formControl.value){
        return {equalsTo: true};
      }

      return null;
    }

    return validator;
  }

  static maskValidate(formatter: any){
    const validator = (formControl: FormControl) => {
      let mask = new StringMask(formatter);

      if(formControl?.value){
        let onlyNumbers = formControl?.value.replace(/[^0-9]/g, '');
        let isValid = mask.validate(onlyNumbers);

        return isValid ? null : {'invalidMask': true};
      }

      return null;
    }

    return validator;
  }

  static getErrorMsg(fieldName: string, validatorName: string){
    const config: any = {
      'required': `${fieldName} é obrigatório(a).`,
      'email': 'Insira um email válido.',
      'pattern': `Insira um ${fieldName} válido.`,
      'equalsTo': 'As senhas precisam ser iguais.',
      'invalidMask': `Digite um(a) ${fieldName} válido(a).`,
      'existingData': `Este(a) ${fieldName} já está sendo utilizado(a).`
    };

    return config[validatorName];
  }
}
