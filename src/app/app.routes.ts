import {ContactsListComponent} from "./contacts-list/contacts-list.component";

export const APP_ROUTES = [
  {path: '', pathMatch: 'prefix', redirectTo: 'list'},
  {path: 'list', component: ContactsListComponent}
]
