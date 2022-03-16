import { HttpErrorResponse } from '@angular/common/http';
import { Organization, OrganizationData } from './organization.interfaces';

export interface OrganizationState {
  response: OrganizationData;
  error: HttpErrorResponse;
}
