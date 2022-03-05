import { Delete } from './../models/delete.interface';
import { Injectable } from '@angular/core';
import { PrivateService } from '../../features/services/private.service';
import { ActivitiesResponse, Activities, NewActivity, NewActivityPost, ActivityResponse } from '../models/activities.interfaces';
import { delay, map, switchMap, take } from 'rxjs/operators';
import { ObservableInput, Observable, Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesControllerService {

  constructor(private privateService: PrivateService) { }

  private url: string = "http://ongapi.alkemy.org/api/activities";

  getAll(): Observable<ActivitiesResponse>{
    return this.privateService.get<ActivitiesResponse>(this.url)
  }

  getOne(id: number): Observable<ActivityResponse>{
    return this.privateService.get<ActivityResponse>(this.url, id)
  }

  // async insertActivity(body: NewActivity): Promise<Observable<ActivitiesResponse>>{
  //   const allowedFormat = /(\.jpg|\.jpeg|\.png)$/i
  //   if (!allowedFormat.test(body.image.name)) {
  //     throw new Error ("format not allowed")
  //   }
  //   const image = await this.fileToBase64(body.image);
  //   const newBody: NewActivityPost = body;
  //   newBody.image = image;

  //   return this.privateService.post<ActivitiesResponse>(this.url, newBody)
  // }

  insertActivity(body: Activities): Observable<ActivityResponse>{
    return this.privateService.post<ActivityResponse>(this.url, body);
  }


  // async updateActivity(id: number, body: NewActivity): Promise<Observable<ActivitiesResponse>>{
  //   const allowedFormat = /(\.jpg|\.jpeg|\.png)$/i
  //   if (!allowedFormat.test(body.image.name)) {
  //     throw new Error ("format not allowed")
  //   }
  //   const image = await this.fileToBase64(body.image);
  //   const newBody: NewActivityPost = body;
  //   newBody.image = image;

  //   return this.privateService.patch<ActivitiesResponse>(this.url, newBody, id)
  // }

  updateActivity(id: number, body: Activities): Observable<ActivityResponse>{
    return this.privateService.patch<ActivityResponse>(this.url, body, id);
  }

  delete(id: number): Observable<Delete>{
    return this.privateService.delete(this.url, id)
  }

  
  fileToBase64(file: File): Promise<string | ArrayBuffer | undefined>{
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result?.toString())
      reader.onerror = (error) => resolve("Error convert to base64" )
    })
  }

}
