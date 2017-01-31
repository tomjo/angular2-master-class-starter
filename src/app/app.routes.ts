import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";
import {ContactsDetailViewComponent} from "./contacts-detail-view/contacts-detail-view.component";
import {ContactsCreatorComponent} from "./contacts-creator/contacts-creator.component";

export const APP_ROUTES = [
  {path: 'contacts', component: ContactsListComponent},
  {path: 'contacts/new', component: ContactsCreatorComponent},
  {path: 'contacts/:id', component: ContactsDetailViewComponent},
  {path: 'contacts/:id/edit', component: ContactsEditorComponent},
  {path: '**', redirectTo: 'contacts'}
];
