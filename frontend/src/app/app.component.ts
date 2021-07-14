import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  drop_down : boolean = false;
  dropDownMenu() : void {
    console.log("");
    this.drop_down == true ? false : true;
  }
}
