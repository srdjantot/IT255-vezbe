import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursorTrackerService {
  #position = fromEvent<MouseEvent>(this.document, 'mousemove').pipe(share());

  constructor(@Inject(DOCUMENT) private document: Document) { }

  get position(): Observable<MouseEvent> {
    return this.#position;
  }

}
