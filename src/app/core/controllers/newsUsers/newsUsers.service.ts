import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/services/http.service';
import { ActivityResponse } from '@app/shared/models/activity.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsUsersService {
  private _groupId: string = "153";
  private _headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ Group: this._groupId });
  }

  public get<T>(url: string, activateHeader?: boolean): Observable<T> {
    throw new Error('Method not implemented.');
  }
  public post<T>(url: string, body: any, activateHeader?: boolean): Observable<T> {
    throw new Error('Method not implemented.');
  }
  public patch<T>(url: string, body: any, activateHeader?: boolean): Observable<T> {
    throw new Error('Method not implemented.');
  }
  public getUser<T>(url: string, activateHeader?: boolean): Observable<ActivityResponse> {
    throw new Error('Method not implemented.');
  }

}
