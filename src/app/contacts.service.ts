import { Injectable } from '@angular/core';
import {Contact} from "./models/contact";
import {CONTACT_DATA} from "./data/contact-data";

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts(): Contact[] {
    return CONTACT_DATA;
  }

  getContact(id: string): Contact {
    return this.getContacts().find(contact => contact.id.toString() === id);
  }
}
