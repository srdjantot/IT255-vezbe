import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../app.config';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) { }

  putRecipes(recipes: Recipe[]): Observable<object> {
    return this.http.put(this.apiUrl + '/data', { data: recipes });
  }

  getRecipes(): Observable<object> {
    return this.http.get(this.apiUrl + '/data');
  }
}
