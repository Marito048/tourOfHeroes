import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app', //<my-app><my-app> en index.html
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Tour of Heroes';
}

