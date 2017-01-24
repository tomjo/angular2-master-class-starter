import {Component, OnInit} from "@angular/core";
import {Contact} from "../models/contact";
import {ContactsService} from "../contacts.service";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Contact[]>;
  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit(): void {
    let searchedContacts$ = this.contactsService.search(this.terms$);
    this.contacts = this.contactsService.getContacts()
      .takeUntil(searchedContacts$)
      .merge(searchedContacts$);
  }

  trackByContactId(index: number, contact: Contact): number {
    return contact.id;
  }
}
