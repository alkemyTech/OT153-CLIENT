import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PrivateService {
  private token: string;

  constructor(private http: HttpClient) {}

  headers() {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    });
    return httpHeaders;
  }

  router(url: string, id?: string) {
    let route = url;
    if (id) {
      route = url + "/" + id;
    }
    return route;
  }

  get<T>(url: string, id?: string): Observable<T> {
    const urls = this.router(url, id);
    return this.http.get<T>(urls, { headers: this.headers() });
  }

  put<T>(url: string, body: object, id?: string): Observable<T> {
    const urls = this.router(url, id);
    return this.http.put<T>(urls, JSON.stringify(body), {
      headers: this.headers(),
    });
  }

  post<T>(url: string, body: object): Observable<T> {
    const urls = this.router(url);
    return this.http.post<T>(urls, JSON.stringify(body), {
      headers: this.headers(),
    });
  }

  patch<T>(url: string, body: object, id?: string): Observable<T> {
    const urls = this.router(url, id);
    return this.http.patch<T>(urls, JSON.stringify(body), {
      headers: this.headers(),
    });
  }

  checkToken(): string | Headers {
    let token = JSON.parse(localStorage.getItem("userToken") || "");
    if (token) {
      let headers = new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      });
      return headers;
    }
    return "";
  }
}
