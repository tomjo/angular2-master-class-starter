import {Component, OnInit} from "@angular/core";
import {Contact} from "../models/contact";
import {ContactsService} from "../contacts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";
import {EventBusService} from "../event-bus.service";

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  private contact: Contact;
  public saving: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private contactsService: ContactsService,
              private snackbar: MdSnackBar,
              private eventBus : EventBusService) {
  }

  ngOnInit() {
    this.activatedRoute.data
      .map(data => data['contact'])
      .subscribe(contact => {
        this.contact = contact;
        this.eventBus.emit('appTitleChange', `Edit: ${this.contact.name}`);
      });
  }

  save(contact: Contact): void {
    this.saving = true;
    this.contactsService.updateContact(contact)
      .subscribe(
        res => this.goToDetails(contact),
        error => this.showSnackbar('Failed to update contact')
      );
  }

  cancel(contact: Contact): void {
    this.goToDetails(contact);
  }

  private goToDetails(contact: Contact): void {
    this.router.navigate(['/contacts', contact.id]);
    //this.router.navigate(['../', {relativeTo: this.activatedRoute}]);
  }

  private showSnackbar(message: string, duration = 5000): void {
    let simpleSnackBarRef = this.snackbar.open(message, 'ok, gotcha');
    setTimeout(simpleSnackBarRef.dismiss.bind(simpleSnackBarRef), duration);
  }
}
