import {Injectable, Inject} from "@angular/core";
import {Contact} from "./models/contact";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {API_ENDPOINT} from "./tokens";

@Injectable()
export class ContactsService {

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

  updateContact(contact: Contact): Observable<any> {
    return this.http.put(`${this.apiEndpoint}/contacts/${contact.id}`, contact);
  }

  search(terms: Observable<string>, debounceMs = 400): Observable<Contact[]> {
    return terms.debounceTime(debounceMs)
      .distinctUntilChanged()
      .map(term => this.rawSearch(term))
      .switch(); //unsubscribe from previous observables
  }

  private rawSearch(term: string): Observable<Contact[]> {
    return this.http.get(`${this.apiEndpoint}/search?text=${term}`)
      .map(res => res.json())
      .map(data => data.items);
  }
}
