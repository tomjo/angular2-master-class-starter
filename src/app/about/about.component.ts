import {Component, OnInit} from "@angular/core";
import {EventBusService} from "../event-bus.service";

@Component({
  selector: 'trm-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private eventBus: EventBusService) { }

  ngOnInit() {
    this.eventBus.emit('appTitleChange', 'About');
  }

}
