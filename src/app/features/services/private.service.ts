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

  get(rout: string, id?: string) {
    const urls = this.router(rout, id);
    return this.http.get(urls);
  }

  put(rout: string, body: object, id?: string) {
    const httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    const urls = this.router(rout, id);
    return this.http.put(urls, JSON.stringify(body), { headers: httpHeaders });
  }

<<<<<<< HEAD
  post(rout: string, body: object) {
    const httpHeaders = this.headers();
=======
  post(rout: string, body: object, auth?: boolean) {
    const httpHeaders = this.headers(auth);
>>>>>>> ac0613b (Create functions Edit and Create Users)
    const urls = this.router(rout);
    return this.http.post<any>(urls, JSON.stringify(body), {
      headers: httpHeaders,
    });
    
  }

<<<<<<< HEAD
    patch(rutter: string, body: object, id?: string) {
    const httpHeaders = this.headers();
=======
    patch(rutter: string, body: object, id?: string, auth?: boolean) {
    const httpHeaders = this.headers(auth);
>>>>>>> ac0613b (Create functions Edit and Create Users)
    const urls = this.router(rutter, id);
    return this.http.patch(urls, JSON.stringify(body), {
      headers: httpHeaders,
    });
  }

  
<<<<<<< HEAD
  headers() {
=======
  headers(auth?: boolean) {
>>>>>>> ac0613b (Create functions Edit and Create Users)
    let httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    return httpHeaders;
  }

}
