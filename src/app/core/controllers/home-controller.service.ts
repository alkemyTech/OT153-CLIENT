import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class HomeControllerService {
  constructor(private http: HttpService) {}

  private url: string = 'http://ongapi.alkemy.org/api/';

  public getOrganizationData<T>(): Observable<T> {
    return this.http.get<T>(this.url + 'organization');
  }

  public getSlides<T>(id: string): Observable<T> {
    return this.http.get<T>(this.url + 'slides/' + id);
  }

  public getNews<T>(search_filter?: string, category_id?: string, offset?: string, limit?: string): Observable<T> {
    let newsUrl = this.url + 'news?';
    if (search_filter) {
      newsUrl = `${newsUrl}search=${search_filter}&`;
    }
    if (category_id) {
      newsUrl = `${newsUrl}category=${category_id}&`;
    }
    if (offset) {
      newsUrl = `${newsUrl}skip=${offset}&`;
    }
    if (limit) {
      newsUrl = `${newsUrl}limit=${limit}`;
    }
    return this.http.get<T>(newsUrl);
  }
}
