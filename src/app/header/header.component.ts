import { Component, Inject } from '@angular/core';
import { APP_TITLE } from '../app.config';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'met-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public authService: AuthService, @Inject(APP_TITLE) private appTitle: string) { }

  get title(): string {
    return this.appTitle;
  }
}
