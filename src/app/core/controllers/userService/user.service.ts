import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, Users, UserData } from '@app/core/models/users.interfaces';
import { Delete } from '@app/core/models/delete.interface';
import { HttpService } from '@app/core/services/http.service';
import { Observable, Observer, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _groupId: string = '153';
  private _headers!: HttpHeaders;
  private _baseUrl: string = environment.users;

  constructor(private http: HttpClient) {}

  headers() {
    let httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return httpHeaders;
  }

  public getAllUsers(): Observable<Users> {
    return this.http.get<Users>(this._baseUrl, { headers: this.headers() });
  }

  public createUser(body: UserData): Observable<User> {
    return this.http.post<User>(this._baseUrl, body, { headers: this.headers() });
  }

  public getUserById(id: number): Observable<User> {
    let url = `${this._baseUrl}/${id}`;
    return this.http.get<User>(url);
  }

  public updateUserById(id: number, body: UserData): Observable<User> {
    let url = `${this._baseUrl}/${id}`;
    return this.http.put<User>(url, body, { headers: this.headers() });
  }

  public deleteUserById(id: number): Observable<Delete> {
    let url = `${this._baseUrl}/${id}`;
    return this.http.delete<Delete>(url);
  }
}
