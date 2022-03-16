import { HttpErrorResponse } from '@angular/common/http';
import { Organization } from './organization.interfaces';

export interface OrganizationState {
  response: Organization;
  error: HttpErrorResponse;
}
