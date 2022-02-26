import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/services/http.service';
import { Observable, Observer } from 'rxjs';
import { User, Users, UserData } from '@app/core/models/users.interfaces';
import { Delete } from '@app/core/models/delete.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _groupId: string = "153";
  private _headers!: HttpHeaders;
  private _baseUrl: string = 'http://ongapi.alkemy.org/api/users'; 
  
  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ Group: this._groupId })
  }

  public getAllUsers(): Observable<Users> {
    return this.http.get<Users>(this._baseUrl);
  }

  public createUser<User>(body :UserData): Observable<User> {
    throw new Error('Method not implemented.');
  }

  public getUserById<User>(id: number): Observable<User> {
    let url = `${this._baseUrl}/${id}`;
    return this.http.get<User>(url);
  }

  public updateUserById<User>(id: number, body:UserData): Observable<User> {
    throw new Error('Method not implemented.');
  }

  public deleteUserById(id: number): Observable<Delete>{
    throw new Error('Method not implemented.');
  }

}
