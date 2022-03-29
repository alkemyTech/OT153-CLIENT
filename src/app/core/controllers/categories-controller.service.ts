import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delete } from '@app/core/models/delete.interface';
import { HttpService } from '@app/core/services/http.service';
import { Observable, Observer, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { respFullCategories, respFullCategoriess } from '../models/category.interface';


@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private _groupId: string = '153';
  private _headers!: HttpHeaders;
  private _baseUrl: string = environment.apiUrlCategories;

  constructor(private http: HttpClient) {}

  headers() {
    let httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return httpHeaders;
  }

  public getAllCategories(): Observable<respFullCategories> {
    return this.http.get<respFullCategories>(this._baseUrl, { headers: this.headers() });
  }


  public getCategoryById(name: string): Observable<respFullCategories> {
    let url = `${this._baseUrl}?search=${name}`;
    return this.http.get<respFullCategories>(url);
  }

}
