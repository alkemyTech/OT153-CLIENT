import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PrivateService } from './private.service';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  urlApi = environment.login;
 
  constructor(private privateService: PrivateService) { }

  auth(user:any): Observable<any> {
    const body = {
      email: user.email,
      password: user.password,
    };
    return this.privateService.post(this.urlApi, body);
  }

}