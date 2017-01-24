import {Component, QueryList, ContentChildren, AfterContentInit} from "@angular/core";
import {TabComponent} from "./tab/tab.component";

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit{

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  ngAfterContentInit(): void {
    this.select(this.tabs.first);
  }

  select(tab: TabComponent): void {
    this.tabs.forEach(t => t.selected = false);
    tab.selected = true;
  }
}
