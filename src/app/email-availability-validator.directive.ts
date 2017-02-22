import {Directive, forwardRef} from "@angular/core";
import {FormControl, NG_ASYNC_VALIDATORS} from "@angular/forms";
import {ContactsService} from "./contacts.service";

export function checkEmailAvailability(contactsService: ContactsService) {
  return (c: FormControl) => contactsService.isEmailAvailable(c.value);
}

@Directive({
  selector: '[trmCheckEmailAvailability][ngModel]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => EmailAvailabilityValidatorDirective),
      multi: true
    }
  ]
})
export class EmailAvailabilityValidatorDirective {
  private validator: Function;

  constructor(contactsService: ContactsService) {
    this.validator = checkEmailAvailability(contactsService);
  }

  validate(control: FormControl) {
    return this.validator(control);
  }
}
