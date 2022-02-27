import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Activities } from '@app/core/models/activities.interfaces'
import { ActivityResponse } from "@app/shared/models/activity.model";
@Injectable({
  providedIn: "root",
})
export class PublicapiService {
  constructor(private http: HttpClient) {}

  public get<T>(url: string, id: string | number | null = null): Observable<ActivityResponse> {
    return this.http.get<ActivityResponse>(`${url}/${id ? id : ""}`);
  }
}
