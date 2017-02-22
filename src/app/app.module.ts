import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ContactsAppComponent} from "./contacts.component";
import {ContactsService} from "./contacts.service";
import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {ContactsDetailComponent} from "./contacts-detail/contacts-detail.component";
import {HttpModule} from "@angular/http";
import {environment} from "./environment";
import {API_ENDPOINT} from "./tokens";
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";
import {FormsModule} from "@angular/forms";
import {ContactsDetailViewComponent} from "./contacts-detail-view/contacts-detail-view.component";
import {TabsComponent} from "./tabs/tabs.component";
import {TabComponent} from "./tabs/tab/tab.component";
import {EventBusService} from "./event-bus.service";
import {ContactsCreatorComponent} from "./contacts-creator/contacts-creator.component";
import {EmailValidatorDirective} from "./email-validator.directive";

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent, ContactsDetailViewComponent, TabsComponent, TabComponent, ContactsCreatorComponent, EmailValidatorDirective],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    FormsModule
  ],
  providers: [
    ContactsService,
    {
      provide: API_ENDPOINT,
      useValue: environment.apiEndpoint
    },
    EventBusService
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
