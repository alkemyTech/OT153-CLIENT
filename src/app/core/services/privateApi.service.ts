import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PrivateApiService {
  private _groupId: string = "153";
  private _headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ Group: this._groupId });
    this._headers.set(
      "Authorization",
      "Bearer " + localStorage.getItem("session_token")
    );
  }

  public patch<T>(url: string, body: any, activateHeader: boolean = true): Observable<T> {
    return this.http.patch<T>(
      url,
      body,
      activateHeader ? { headers: this._headers } : {}
    );
  }
}
