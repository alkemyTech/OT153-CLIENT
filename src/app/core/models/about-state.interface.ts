import { Members, MembersResponse } from './members.interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { Organization } from './organization.interfaces';

export interface AboutMembersState {
  response: Members[];
  error: HttpErrorResponse;
}

export interface AboutOrganizationState {
  response: Organization;
  error: HttpErrorResponse;
}
