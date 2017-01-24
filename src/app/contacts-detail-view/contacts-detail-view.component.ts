import {Component, OnInit} from "@angular/core";
import {ContactsService} from "../contacts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../models/contact";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  contact : Contact;

  constructor(private contactsService : ContactsService, private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.contactsService.getContact(id).subscribe(contact => this.contact = contact);
  }

  navigateToEditor(contact: Contact){
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

  navigateToList(){
    this.router.navigate(['/']);
  }
}