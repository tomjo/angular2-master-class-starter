import {Injectable, Inject} from "@angular/core";
import {Contact} from "./models/contact";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {API_ENDPOINT} from "./tokens";

@Injectable()
export class ContactsService{

  constructor(private http: Http, @Inject(API_ENDPOINT) private apiEndpoint) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get(`${this.apiEndpoint}/contacts`)
      .map(res => res.json())
      .map(data => data.items);
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get(`${this.apiEndpoint}/contacts/${id}`)
      .map(res => res.json())
      .map(data => data.item);
  }
}
