import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../app.config';
import { Recipe } from '../models/recipe';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string, private authService: AuthService) { }

  putRecipes(recipes: Recipe[]): Observable<object> {
    let body: any = {
      data: recipes
    };

    if (this.authService.isAuthenticated) {
      body = {
        ...body,
        username: this.authService.user
      };
    }

    return this.http.put(this.apiUrl + '/data', body);
  }

  getRecipes(): Observable<object> {
    let options: any;

    if (this.authService.isAuthenticated) {
      options = {
        params: {
          username: this.authService.user
        }
      };
    }

    return this.http.get(this.apiUrl + '/data', options);
  }
}
