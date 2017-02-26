import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";
import {ContactsDetailViewComponent} from "./contacts-detail-view/contacts-detail-view.component";
import {ContactsCreatorComponent} from "./contacts-creator/contacts-creator.component";
import {AboutComponent} from "./about/about.component";
import {ContactsDashboardComponent} from "./contacts-dashboard/contacts-dashboard.component";

export const APP_ROUTES = [
  {path: '', component: ContactsDashboardComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'contacts/0'},
    {path: 'contacts/new', component: ContactsCreatorComponent},
    {path: 'contacts/:id', component: ContactsDetailViewComponent},
    {path: 'contacts/:id/edit', component: ContactsEditorComponent},
    {path: 'contacts', component: ContactsListComponent}
  ]},
    {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: '/'}
];
