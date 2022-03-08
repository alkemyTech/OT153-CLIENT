import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { User } from "src/app/core/models/user.models";
import { environment } from "src/environments/environment.local";
import { PrivateService } from "./private.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userApiUrl = environment.apiUrlUsers;
  constructor(private http: PrivateService) {}

  getUser(id?: string): Observable<any> {
    return this.http.get(this.userApiUrl, id);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(this.userApiUrl, user);
  }

  editUser(id: string, usuario: User): Observable<any> {
    return this.http.put(this.userApiUrl, usuario, id);
  }
  
}
