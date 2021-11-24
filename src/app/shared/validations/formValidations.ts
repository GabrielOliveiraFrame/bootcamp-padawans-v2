export class FormValidations
{
  static getErrorMsg(fieldName: string, validatorName: string){
    const config: any = {
      'required': `${fieldName} é obrigatório.`,
    };

    return config[validatorName];
  }
}
