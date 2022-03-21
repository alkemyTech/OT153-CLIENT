import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivityResponse } from '../models/activities.interfaces';
import { Observable } from 'rxjs';
import { Organization } from '../models/organization.interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class PublicapiService {
  constructor(private http: HttpClient) {}

  public get<T>(url: string, id: number | null = null): Observable<T> {
    return this.http.get<T>(`${url}/${id ? id : ''}`);
  }

  public getPublicActivity<T>(url: string, id: string | number | null = null): Observable<ActivityResponse> {
    return this.http.get<ActivityResponse>(`${url}/${id ? id : ''}`);
  }

  public getPublicOrganization<T>(): Observable<Organization> {
    return this.http.get<Organization>(environment.apiUrlOrganization);
  }

  public postContact<ContactFormResponse>(url: string, body: {}): Observable<ContactFormResponse> {
    return this.http.post<ContactFormResponse>(url, body ? body : {});
  }
}
