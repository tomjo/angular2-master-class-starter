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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContactsDetailViewComponent} from "./contacts-detail-view/contacts-detail-view.component";
import {TabsComponent} from "./tabs/tabs.component";
import {TabComponent} from "./tabs/tab/tab.component";
import {EventBusService} from "./event-bus.service";
import {ContactsCreatorComponent} from "./contacts-creator/contacts-creator.component";
import {EmailValidatorDirective} from "./email-validator.directive";
import {EmailAvailabilityValidatorDirective} from "./email-availability-validator.directive";
import {ContactsDashboardComponent} from "./contacts-dashboard/contacts-dashboard.component";
import {ConfirmDeactivationDialogComponent} from "./confirm-deactivation-dialog/confirm-deactivation-dialog.component";
import {CanDeactivateContactsEditorGuard} from "./guards/candeactivatecontactseditorguard";
import {ContactsResolver} from "./shared/contacts.resolver";

export function confirmNavigationGuard(component: ContactsEditorComponent){
  if (component.saving) {
    return true;
  }
  return window.confirm('Navigate away without saving?');
}

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent, ContactsDetailViewComponent, TabsComponent, TabComponent, ContactsCreatorComponent, EmailValidatorDirective, EmailAvailabilityValidatorDirective, ContactsDashboardComponent, ConfirmDeactivationDialogComponent],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
  HttpModule,
  FormsModule,
  ReactiveFormsModule
],
  providers: [
{
      provide: 'ConfirmNavigationGuard',
      useValue: confirmNavigationGuard
    },
    CanDeactivateContactsEditorGuard,
    ContactsService,
    {
      provide: API_ENDPOINT,
      useValue: environment.apiEndpoint
    },
    EventBusService,
    ContactsResolver
],
  bootstrap: [ContactsAppComponent],
  entryComponents: [ConfirmDeactivationDialogComponent]
})
export class ContactsModule {

}

