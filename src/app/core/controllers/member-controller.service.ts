import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delete } from '@app/core/models/delete.interface';
import { HttpService } from '@app/core/services/http.service';
import { Observable, Observer, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Member, MemberResponse, MembersResponse } from '../models/members.interfaces';


@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private _groupId: string = '153';
  private _headers!: HttpHeaders;
  private _baseUrl: string = environment.membersApiUrl;

  constructor(private http: HttpClient) {}

  headers() {
    let httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return httpHeaders;
  }

  public getAllMembers(): Observable<MembersResponse> {
    return this.http.get<MembersResponse>(this._baseUrl, { headers: this.headers() });
  }

  public createMember(body: Member): Observable<MemberResponse> {
    return this.http.post<MemberResponse>(this._baseUrl, body, { headers: this.headers() });
  }

  public getMemberById(id: number): Observable<MemberResponse> {
    let url = `${this._baseUrl}/${id}`;
    return this.http.get<MemberResponse>(url);
  }

  public updateMemberById(id: number, body: Member): Observable<MemberResponse> {
    let url = `${this._baseUrl}/${id}`;
    return this.http.put<MemberResponse>(url, body, { headers: this.headers() });
  }

  public deleteMemberById(id: number): Observable<Delete> {
    let url = `${this._baseUrl}/${id}`;
    return this.http.delete<Delete>(url);
  }
}
