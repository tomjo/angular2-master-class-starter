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
    this.contacts = this.contactsService.getContacts();
    this.terms$.debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => this.search(term));
  }

  trackByContactId(index: number, contact: any): number {
    return contact.id;
  }

  search(term: string): void{
    this.contacts = this.contactsService.search(term);
  }
}
