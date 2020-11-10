import { Component, Inject } from '@angular/core';
import { APP_TITLE } from '../app.config';

@Component({
  selector: 'met-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(@Inject(APP_TITLE) private appTitle: string) { }

  get title(): string {
    return this.appTitle;
  }
}
