import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PrivateService {

  constructor(private http: HttpClient) {}

  router(url: string, id?: string) {
    let route = url;
    if (id) {
      route = url + "/" + id;
    }

    return route;
    
  }

  get(url: string, id?: string) {
    const urls = this.router(url, id);
    return this.http.get(urls);
  }

  put(url: string, body: object, id?: string) {
    const httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    const urls = this.router(url, id);
    return this.http.put(urls, JSON.stringify(body), { headers: httpHeaders });
  }

  post(url: string, body: object) {
    const httpHeaders = this.headers();
    const urls = this.router(url);
    return this.http.post<any>(urls, JSON.stringify(body), {
      headers: httpHeaders,
    });
    
  }

    patch(url: string, body: object, id?: string) {
    const httpHeaders = this.headers();
    const urls = this.router(url, id);
    return this.http.patch(urls, JSON.stringify(body), {
      headers: httpHeaders,
    });
  }

  
  headers() {
    let httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    return httpHeaders;
  }

}
