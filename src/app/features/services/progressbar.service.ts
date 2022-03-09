import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  display: boolean = false;
  constructor() {}

  renderProgressBar(): Observable<boolean> {
    return of(this.display)
  }

  showProgressbar(): void {
    this.display = true;
  }

  disableProgressbar(): void {
    this.display = false;
  }

}
