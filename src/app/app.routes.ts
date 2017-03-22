import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";
import {ContactsDetailViewComponent} from "./contacts-detail-view/contacts-detail-view.component";
import {ContactsCreatorComponent} from "./contacts-creator/contacts-creator.component";
import {ContactsDashboardComponent} from "./contacts-dashboard/contacts-dashboard.component";
import {CanDeactivateContactsEditorGuard} from "./guards/candeactivatecontactseditorguard";
import {ContactsResolver} from "./shared/contacts.resolver";

export const APP_ROUTES = [
  {path: '', component: ContactsDashboardComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'contacts/0'},
    {path: 'contacts/new', component: ContactsCreatorComponent},
    {path: 'contacts/:id', component: ContactsDetailViewComponent, resolve: { contact: ContactsResolver }},
    {path: 'contacts/:id/edit', component: ContactsEditorComponent, canDeactivate: ['ConfirmNavigationGuard', CanDeactivateContactsEditorGuard], resolve: { contact: ContactsResolver }},
    {path: 'contacts', component: ContactsListComponent}
  ]},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '**', redirectTo: '/'}
];
