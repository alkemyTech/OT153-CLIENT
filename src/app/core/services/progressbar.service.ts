import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  display = new BehaviorSubject<boolean>(true);
  constructor() {}

  setDisplay(state: boolean): void {
    this.display.next(state)
  }

  getDisplay() : Observable<boolean> {
    return this.display;
  }
}
