import { Delete } from './../models/delete.interface';
import { Injectable } from '@angular/core';
import { PrivateService } from '../../features/services/private.service';
import { ActivitiesResponse, Activities, NewActivity, NewActivityPost, ActivityResponse } from '../models/activities.interfaces';
import { delay, map, switchMap, take } from 'rxjs/operators';
import { ObservableInput, Observable, Subject, ReplaySubject } from 'rxjs';
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

  getOne(id: number): Observable<ActivityResponse>{
    return this.privateService.get<ActivityResponse>(this.url, id)
  }

  insertActivity(body: NewActivity): Observable<ActivityResponse>{
    const _body64: NewActivityPost = this.toBase64(body);
    return this.privateService.post<ActivityResponse>(this.url, _body64);
  }

  updateActivity(id: number, body: NewActivity): Observable<ActivityResponse>{
    const _body64: NewActivityPost = this.toBase64(body);
    return this.privateService.patch<ActivityResponse>(this.url, _body64, id);
  }

  delete(id: number): Observable<Delete>{
    return this.privateService.delete(this.url, id)
  }

  private toBase64(body: NewActivity) {
    const allowedFormat = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedFormat.test(body.image.name)) {
      throw new Error("format not allowed");
    }
    const image = this.fileToBase64(body.image);
    const newBody: NewActivityPost = body;
    newBody.image = image;
    return newBody;
  }

  private fileToBase64(file: File): string | ArrayBuffer | undefined{
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = function () {
      return reader.result?.toString()
    };
    reader.onerror = function (error) {
      return "Error convert to base64"
    };
    return undefined;
  }

}

