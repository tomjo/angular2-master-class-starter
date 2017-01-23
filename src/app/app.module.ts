import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ContactsAppComponent} from "./contacts.component";
import {ContactsService} from "./contacts.service";
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ContactsService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
