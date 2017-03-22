import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Contact} from "../models/Contact";
import {ContactsService} from "../contacts.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ContactsResolver implements Resolve<Contact> {

  constructor(private service: ContactsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
    return this.service.getContact(route.params['id']);
  }
}
