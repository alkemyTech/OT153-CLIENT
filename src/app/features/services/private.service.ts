import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PrivateService {

  constructor(private http: HttpClient) {}

  router(rout: string, id?: string) {
    let route = rout;
    if (id) {
      route = rout + "/" + id;
    }

    return route;
    
  }

  get<T>(rout: string, id?: string) {
    const urls = this.router(rout, id);
    return this.http.get<T>(urls);
  }

  put(rout: string, body: object, id?: string) {
    const httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    const urls = this.router(rout, id);
    return this.http.put(urls, JSON.stringify(body), { headers: httpHeaders });
  }

  post(rout: string, body: object) {
    const httpHeaders = this.headers();
    const urls = this.router(rout);
    return this.http.post<any>(urls, JSON.stringify(body), {
      headers: httpHeaders,
    });
    
  }

  patch(rutter: string, body: object, id?: string) {
    const httpHeaders = this.headers();
    const urls = this.router(rutter, id);
    return this.http.patch(urls, JSON.stringify(body), {
      headers: httpHeaders,
    });
  }
    
  headers() {
    let httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    return httpHeaders;
  }

}
