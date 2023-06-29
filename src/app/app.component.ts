import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { ConvertComponent } from './convert/convert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'money-converter';
}
