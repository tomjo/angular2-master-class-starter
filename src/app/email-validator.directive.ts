import {Directive} from "@angular/core";
import {FormControl, NG_VALIDATORS} from "@angular/forms";

export function validateEmail(c: FormControl) {
  const VALID_EMAIL = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  return VALID_EMAIL.test(c.value)
    ? null
    :
    {
      validateEmail: {
        valid: false
      }
    }
  ;
}

@Directive({
  selector: '[trmEmailValidator][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useValue: validateEmail, multi: true}
  ]
})
export class EmailValidatorDirective {
}


