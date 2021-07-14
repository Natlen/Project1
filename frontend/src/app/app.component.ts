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
    this.drop_down == true ? this.drop_down = false : this.drop_down = true;
  }
}
