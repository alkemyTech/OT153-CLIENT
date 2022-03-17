import { Injectable } from '@angular/core';
import { PrivateService } from '../../features/services/private.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { New, NewResponse, NewsResponse } from '@app/core/models/news.interfaces';
import { Delete } from '../models/delete.interface';
import { Organization } from '@core/models/organization.interfaces';
import { PublicapiService } from '../services/publicApi.service';
import { PrivateApiService } from '../services/privateApi.service';

@Injectable({
  providedIn: 'root',
})
export class OrganizationControllerService {
  private url: string = environment.apiUrlNews;

  constructor(private privateService: PrivateApiService, private publicService: PublicapiService) {}

  public getPublicOrganization<T>(): Observable<Organization> {
    return this.publicService.getPublicOrganization<Organization>();
  }

  public postOrganization(body: {}, activateHeader: boolean = true): Observable<Organization> {
    return this.privateService.post<Organization>(environment.apiUrlOrganization, body ? body : {});
  }
}
