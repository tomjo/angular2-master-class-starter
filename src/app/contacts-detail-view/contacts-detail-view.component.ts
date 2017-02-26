import {Component, OnInit} from "@angular/core";
import {ContactsService} from "../contacts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../models/contact";
import {EventBusService} from "../event-bus.service";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  contact: Contact;

  constructor(private contactsService: ContactsService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private eventBus: EventBusService) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .switchMap(params => this.contactsService.getContact(params['id']))
      .subscribe(contact => {
        this.contact = contact;
        this.eventBus.emit('appTitleChange', `Detail: ${this.contact.name}`);
      });
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

  navigateToList() {
    this.router.navigate(['/']);
  }
}
