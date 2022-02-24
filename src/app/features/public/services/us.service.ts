import { Injectable } from '@angular/core';
import { PrivateService } from '@app/features/services/private.service';
import { Observable } from "rxjs";
import { Member } from "src/app/core/models/members.interfaces";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsService {

  environment = environment.membersUrl;
  constructor(private http: PrivateService) {}

  getMember(id?: string): Observable<any> {
    return this.http.get(this.environment, id);
  }
  
}


  

