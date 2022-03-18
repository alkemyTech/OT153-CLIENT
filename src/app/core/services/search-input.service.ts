import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchInputService {

  private initialBackofficeLayout = {
    actual: '',
    showSlide: false, 
  }

  private actualObservable: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.initialBackofficeLayout.actual );
  private showSlideObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.initialBackofficeLayout.showSlide );
  
  constructor() {}
  
  get LayoutActualObservable(): Observable<string> {
      return this.actualObservable.asObservable()
  }
  
  get ShowSlideObservable(): Observable<boolean> {
      return this.showSlideObservable.asObservable()
  }

  set LayoutActual( nuevoactual : string ){
    this.actualObservable.next(nuevoactual);
  }

  private set ShowSlide(flag : boolean) {
    this.showSlideObservable.next(flag);
  }

  showSlide() : void{
    this.ShowSlide = true;
  }

  hideSlide() : void{
    this.ShowSlide = false;
  }

    
}
