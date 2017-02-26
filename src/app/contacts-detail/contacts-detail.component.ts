import {Component, Input, EventEmitter, Output} from "@angular/core";
import {Contact} from "../models/contact";

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent{
  @Input() contact : Contact;
  @Output() edit = new EventEmitter<Contact>();
  @Output() back = new EventEmitter<Contact>();
}
