import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';
import { PrivateService } from './private.service';
import { User } from '../models/user.models';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  urlApiL = environment.apiUrlLogin;
  urlApiR = environment.apiUrlRegister;
 
  constructor(private privateService: PrivateService) { }

  auth(user:User): Observable<any> {
    const body = {
      email: user.email,
      password: user.password,
    };
    return this.privateService.post(this.urlApiL, body);
  }

  register(newUser:User): Observable<any> {
    const body = {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    };
    return this.privateService.post(this.urlApiR, body);
  }

}