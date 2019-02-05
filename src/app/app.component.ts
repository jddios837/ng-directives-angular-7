import { Component, ViewChild } from '@angular/core';
import { TooltipDirective } from "./tooltip/tooltip.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-directive';

  @ViewChild(TooltipDirective) public myToolTip: TooltipDirective;

  items = [{
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  },{
    name: 'Tom Delonge',
    age: 41,
    location: 'California'
  },{
    name: 'Travis Barker',
    age: 41,
    location: 'California'
  }];

  constructor() {
    setTimeout(() => {
      this.items = [...this.items, {name: 'Juan', age: 31, location: 'Santa Marta'}]
    })
  }
}
