import {Component, OnInit} from "@angular/core";
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

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private eventBus: EventBusService) {
  }

  //route.data is een observable want resolver pusht nieuwe contact in de observable wanneer we op een ander contact klikken anders zou component reuse niet werken
  ngOnInit() {
    this.activatedRoute.data
      .map(data => data['contact'])
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
