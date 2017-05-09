/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, inject} from "@angular/core/testing";
import {ContactsDetailViewComponent} from "./contacts-detail-view.component";
import {Router} from "@angular/router";
import {EventBusService} from "../event-bus.service";

class RouterStub {
  navigate(paths, options) {

  }
}

class EventBusStub {
  emit(key, value){

  }
}

describe('ContactsDetailViewComponent', () => {
  let component: ContactsDetailViewComponent;
  let fixture: ComponentFixture<ContactsDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsDetailViewComponent ],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: EventBusService, useClass: EventBusStub}
      ]
    })
    .compileComponents().then(()=> {
      fixture = TestBed.createComponent(ContactsDetailViewComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to listview', inject([Router], (router: Router) => {
    const spy = spyOn(router, 'navigate');
    component.navigateToList();
    const navigationArgs = spy.calls.first().args;
    expect(navigationArgs[0]).toBe('/', 'should nav to /');
  }))
});
