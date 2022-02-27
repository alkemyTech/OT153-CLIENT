import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublicapiService {
  constructor(private http: HttpClient) {}

  public get<T>(url: string, id: number | null = null): Observable<T> {
    return this.http.get<T>(`${url}/${id ? id : ''}`);
  }
}