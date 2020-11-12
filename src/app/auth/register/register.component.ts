import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'met-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public router: Router, public auth: AuthService) { }

  onRegister(data: NgForm): void {
    this.auth.register(data.value.email, data.value.password).subscribe(_ => this.router.navigate(['/recipes']));
  }

}
