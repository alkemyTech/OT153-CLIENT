import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivityResponse } from "@app/shared/models/activity.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private _groupId: string = "153";
  private _headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ Group: this._groupId });
  }

  public get<T>(url: string, activateHeader: boolean = false): Observable<T> {
    return this.http.get<T>(
      url,
      activateHeader ? { headers: this._headers } : {}
    );
  }

  public post<T>(
    url: string,
    body: any,
    activateHeader: boolean = false
  ): Observable<T> {
    return this.http.post<T>(
      url,
      body,
      activateHeader ? { headers: this._headers } : {}
    );
  }
<<<<<<< HEAD
=======

  
}
>>>>>>> f4b5092 (Fixing errors and remake the us's components)

  public patch<T>(
    url: string,
    body: any,
    activateHeader: boolean = false
  ): Observable<T> {
    return this.http.patch<T>(
      url,
      body,
      activateHeader ? { headers: this._headers } : {}
    );
  }

  public getActivity<T>(
    url: string,
    activateHeader: boolean = false
  ): Observable<ActivityResponse> {
    return this.http.get<ActivityResponse>(
      url,
      activateHeader ? { headers: this._headers } : {}
    );
  }
}
