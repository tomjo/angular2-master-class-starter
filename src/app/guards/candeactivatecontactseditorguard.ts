import {Observable} from "rxjs";
import {RouterStateSnapshot, ActivatedRouteSnapshot, CanDeactivate} from "@angular/router";
import {MdDialog, MdDialogRef} from "@angular/material";
import {Injectable} from "@angular/core";
import {ContactsEditorComponent} from "../contacts-editor/contacts-editor.component";
import {ConfirmDeactivationDialogComponent} from "../confirm-deactivation-dialog/confirm-deactivation-dialog.component";

@Injectable()
export class CanDeactivateContactsEditorGuard implements CanDeactivate<ContactsEditorComponent> {
  private dialog: MdDialog;

  constructor(dialog: MdDialog) {
    this.dialog = dialog;
  }

  canDeactivate(component: ContactsEditorComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log("save? "+component.saving);
    if (component.saving) {
      return Observable.of(true);
    }
    let ref: MdDialogRef<ConfirmDeactivationDialogComponent> = this.dialog.open(ConfirmDeactivationDialogComponent);
    return ref.afterClosed();
  }
}
