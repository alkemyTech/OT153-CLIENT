import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { User } from "src/app/core/models/user.models";
import { environment } from "../backoffice/pages/users/user-form/enviroment";
import { PrivateService } from "./private.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  environment = environment.usersUrl;
  constructor(private http: PrivateService) {}

  getUser(id?: string): Observable<any> {
    return this.http.get(this.environment, id);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(this.environment, user);
  }

  editUser(id: string, usuario: User): Observable<any> {
    return this.http.patch(this.environment, usuario, id);
  }
  
}
