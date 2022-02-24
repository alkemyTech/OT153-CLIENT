import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private _groupId: string = "153";
  private _headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ responseType: 'blob'  });
  }

  public get<T>(url: string, activateHeader:boolean = false ):Observable<T> {
    return this.http.get<T>(url, activateHeader ? { headers: this._headers }: {});
  }

  public patch<T>(url: string, body: T): Observable<T> {
    return this.http.patch<T>(url, body);
  }

  public post<T>(url: string, body: T): Observable<T> {
    return this.http.post<T>(url, body);
  }
  
}
