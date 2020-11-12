import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'met-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public router: Router, public auth: AuthService) { }

  onLogin(data: NgForm): void {
    this.auth.login(data.value.email, data.value.password).subscribe(_ => this.router.navigate(['/recipes']));
  }

}
