import {Component} from "@angular/core";
import {TabComponent} from "./tab/tab.component";

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent{

  tabs: TabComponent[] = [];

  addTab(tab: TabComponent): void {
    if(this.tabs.length == 0){
      tab.selected = true;
    }
    this.tabs.push(tab);
  }

  select(tab: TabComponent): void {
    this.tabs.forEach(t => t.selected = false);
    tab.selected = true;
  }
}
