import { NewResponse } from './../models/news.interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityResponse } from '@app/core/models/activities.interfaces';
import { New } from '@app/core/models/news.interfaces';
import { environment } from '@env/environment';
import { Organization } from '@core/models/organization.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PrivateApiService {
  private _groupId: string = '153';
  private _headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ Group: this._groupId });
    this._headers.set('Authorization', 'Bearer ' + localStorage.getItem('session_token'));
  }

  public post<T>(url: string, body: any, activateHeader: boolean = false): Observable<T> {
    return this.http.post<T>(url, body, activateHeader ? { headers: this._headers } : {});
  }

  public put<T>(url: string, body: any, id: number, activateHeader: boolean = false): Observable<T> {
    return this.http.put<T>(`${url}/${id}`, body, activateHeader ? { headers: this._headers } : {});
  }

  public patch<T>(url: string, body: {}, activateHeader: boolean = true): Observable<T> {
    return this.http.patch<T>(url, body ? body : {}, activateHeader ? { headers: this._headers } : {});
  }

  public delete<T>(url: string, activateHeader: boolean = true): Observable<T> {
    return this.http.delete<T>(url, activateHeader ? { headers: this._headers } : {});
  }

  public patchActivity<ActivityResponse>(
    url: string,
    body: {},
    activateHeader: boolean = true
  ): Observable<ActivityResponse> {
    return this.http.patch<ActivityResponse>(url, body ? body : {}, activateHeader ? { headers: this._headers } : {});
  }

  public patchNews<NewResponse>(url: string, body: {}, activateHeader: boolean = true): Observable<NewResponse> {
    return this.http.patch<NewResponse>(url, body ? body : {}, activateHeader ? { headers: this._headers } : {});
  }
}
