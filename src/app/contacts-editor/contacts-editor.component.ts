import {Component, OnInit} from "@angular/core";
import {Contact} from "../models/contact";
import {ContactsService} from "../contacts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  private contact: Contact;

  constructor(private contactsService: ContactsService, private activatedRoute: ActivatedRoute, private router: Router, private snackbar: MdSnackBar) {
    this.contact = {address: {}} as Contact;
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.contactsService.getContact(id).subscribe(contact => this.contact = contact);
  }

  save(contact: Contact): void {
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
