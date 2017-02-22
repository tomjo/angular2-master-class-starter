import {Component, OnInit} from "@angular/core";
import {Contact} from "../models/contact";
import {ContactsService} from "../contacts.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {checkEmailAvailability} from "../email-availability-validator.directive";
import {validateEmail} from "../email-validator.directive";

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: './contacts-creator.component.html',
  styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private contactsService: ContactsService,
              private router: Router,
              private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', validateEmail, checkEmailAvailability(this.contactsService)],
        birthday: '',
        phone: '',
        website: '',
        address: this.formBuilder.group(
          {
            street: '',
            zip: '',
            city: ''
          }
        )
      }
    );
  }

  save(contact: Contact): void {
    this.contactsService.addContact(contact).subscribe(
      res => this.router.navigate(['/'])
    );
  }
}
