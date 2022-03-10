import { Members, MembersResponse } from './members.interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { Organization } from './organization.interfaces';

export interface AboutMembersState {
  success: Members[];
  error: HttpErrorResponse;
}

/* export interface AboutOrganizationState {
  response: Organization;
  error: HttpErrorResponse;
}
 */