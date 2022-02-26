import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User, Users, UserData } from '@app/core/models/users.interfaces';
import { Delete } from '@app/core/models/delete.interface';
import { HttpService } from '@app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _groupId: string = "153";
  private _headers!: HttpHeaders;
  private _baseUrl: string = 'http://ongapi.alkemy.org/api/users'; 
  
  constructor(private http: HttpClient) {
    console.log("... user service ...");
  }

  headers() {
    let httpHeaders = new HttpHeaders( { "Content-Type": "application/json"  });
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

  public updateUserById(id: number, body:UserData): Observable<User> {
    return this.http.put<User>(this._baseUrl, JSON.stringify(body), { headers: this.headers() });
  }

  public deleteLogicUserById(id: number): Observable<User>{
    throw new Error('Method not implemented.');
  }

  public deleteUserById(id: number): Observable<Delete>{
    throw new Error('Method not implemented.');
  }

}
