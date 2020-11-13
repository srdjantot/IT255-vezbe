import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, timer } from 'rxjs';
import { concatAll, map, share, startWith, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {
  private apiUrl = 'https://api.adviceslip.com/advice';
  #advices = timer(0, 20000).pipe(
    tap(_ => console.log('Fetching advice...')),
    switchMap(_ => this.http.get(this.apiUrl)),
    map((result: any) => result.slip.advice as string),
    startWith('Loading advice...'),
    share()
  );

  constructor(private http: HttpClient) { }

  get advices(): Observable<string> {
    return this.#advices;
  }

}
