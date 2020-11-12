import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #user: string;
  #errorMessage: string;

  constructor(private router: Router, private http: HttpClient, @Inject(API_URL) private apiUrl: string) { }

  get isAuthenticated(): boolean {
    return this.#user !== undefined;
  }

  get user(): string {
    return this.#user;
  }

  get error(): boolean {
    return this.#errorMessage !== undefined;
  }

  get errorMessage(): string {
    return this.#errorMessage;
  }

  register(email: string, password: string): Observable<object> {
    this.#errorMessage = undefined;
    return this.http.post(this.apiUrl + '/register', { username: email, password })
      .pipe(tap(
        (data: any) => this.#user = data.username,
        (response: HttpErrorResponse) => this.#errorMessage = response.error.error || response.error.message || response.message));
  }

  login(email: string, password: string): Observable<object> {
    this.#errorMessage = undefined;
    return this.http.post(this.apiUrl + '/login', { username: email, password })
      .pipe(tap(
        (data: any) => this.#user = data.username,
        (response: HttpErrorResponse) => this.#errorMessage = response.error.error || response.error.message || response.message));
  }

  logout(): void {
    this.#user = undefined;
    this.#errorMessage = undefined;
    this.router.navigate(['/recipes']);
  }

}
