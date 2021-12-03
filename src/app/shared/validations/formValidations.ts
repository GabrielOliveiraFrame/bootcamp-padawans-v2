import {FormControl } from "@angular/forms";

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

      if(formControl?.value){
        let onlyNumbers = formControl?.value.replace(/[^0-9]/g, '');
        let isValid = formatter.validate(onlyNumbers);

        return isValid ? null : {'invalidMask': true};
      }

      return null;
    }

    return validator;
  }

  static getErrorMsg(fieldName: string, validatorName: string){
    const config: any = {
      'required': `${fieldName} é obrigatório.`,
      'email': 'Insira um email válido.',
      'pattern': `Insira um ${fieldName} válido.`,
      'equalsTo': 'As senhas precisam ser iguais.',
      'invalidMask': `Digite um(a) ${fieldName} válido(a).`
    };

    return config[validatorName];
  }
}
