import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PrivateService } from './private.service';
import { User } from '../models/user.models';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  urlApiL = environment.apiUrlLogin;
  urlApiR = environment.apiUrlRegister;
 
  constructor(
    private privateService: PrivateService,
    public afAuth: AngularFireAuth
  ) {}

  googleLogin(): Observable<firebase.auth.UserCredential>{
    return from(this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
  }

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