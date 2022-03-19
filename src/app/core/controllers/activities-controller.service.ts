import { SearchInputService } from '@app/core/services/search-input.service';
import { Delete } from './../models/delete.interface';
import { Injectable } from '@angular/core';
import { PrivateService } from '../../features/services/private.service';
import { ActivitiesResponse, NewActivity, ActivityResponse } from '../models/activities.interfaces';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class ActivitiesControllerService {

  constructor(private privateService: PrivateService) { }

  private url: string = environment.apiUrlActivities;

  getAll(): Observable<ActivitiesResponse>{
    return this.privateService.get<ActivitiesResponse>(this.url)
  }

  search(value: string): Observable<ActivitiesResponse>{
    return this.privateService.search<ActivitiesResponse>(this.url, value)
  }

  getOne(id: number): Observable<ActivityResponse>{
    return this.privateService.get<ActivityResponse>(this.url, id)
  }

  insertActivity(body: NewActivity): Observable<ActivityResponse>{
    return this.privateService.post<ActivityResponse>(this.url, body);
  }

  updateActivity(id: number, body: NewActivity): Observable<ActivityResponse>{
    return this.privateService.patch<ActivityResponse>(this.url, body, id);
  }

  delete(id: number): Observable<Delete>{
    return this.privateService.delete(this.url, id)
  }

}

//! 10011