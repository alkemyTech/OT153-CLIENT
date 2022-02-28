import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivityResponse } from "../models/activities.interfaces";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PublicapiService {
  constructor(private http: HttpClient) {}

  public get<T>(url: string, id: number | null = null): Observable<T> {
    return this.http.get<T>(`${url}/${id ? id : ""}`);
  }

  public getPublicActivity<T>(url: string, id: string | number | null = null): Observable<ActivityResponse> {
    return this.http.get<ActivityResponse>(`${url}/${id ? id : ""}`);
  }
}
