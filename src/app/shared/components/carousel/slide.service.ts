import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slide } from './slide.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  private apiUrl = `http://ongapi.alkemy.org/api/slides`;

  constructor(private http: HttpClient) { }

  getSlides(): Observable<Slide[]>{
    const url = `${this.apiUrl}/`;
    return this.http.get<Slide[]>(url, httpOptions);
  }

  // getSlide(id: number): Observable<Slide>{
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<Slide>(url, httpOptions);
  // }

  // createSlide(slide: Slide): Observable<any>{
  //   const url = `${this.apiUrl}/`;
  //   return this.http.post<Slide>(url, slide, httpOptions);
  // }
}
