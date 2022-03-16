import { Injectable } from '@angular/core';
import { PrivateService } from '../../features/services/private.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { New, NewResponse, NewsResponse } from '@app/core/models/news.interfaces';
import { Delete } from '../models/delete.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsControllerService {
  // private url:string = environment.apiUrlNews;
  private url:string = 'some_error';

  constructor(private privateService: PrivateService) { }

  getAll(): Observable<NewsResponse>{
    return this.privateService.get<NewsResponse>(this.url);
  }

  getOne(id: number): Observable<NewResponse>{
    return this.privateService.get<NewResponse>(this.url, id)
  }

  insert(body: New): Observable<NewResponse>{
    return this.privateService.post<NewResponse>(this.url, body);
  }

  update(id: number, body: New): Observable<NewResponse>{
    return this.privateService.patch<NewResponse>(this.url, body, id);
  }

  delete(id: number): Observable<Delete>{
    return this.privateService.delete(this.url, id)
  }

}
