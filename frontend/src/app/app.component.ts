import { Component } from '@angular/core';
import { shared_var } from '@common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  test = shared_var;
}
