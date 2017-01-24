import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {EventBusArgs} from "./models/event-bus-args";

@Injectable()
export class EventBusService {

  events$ = new Subject<EventBusArgs>();

  constructor() { }

  emit(eventType: string, data: any) {
    this.events$.next({ eventType: eventType, data: data });
  }

  observe(eventType: string) {
    return this.events$
      .filter(args => args.eventType === eventType)
      .map(args => args.data);
  }

}
