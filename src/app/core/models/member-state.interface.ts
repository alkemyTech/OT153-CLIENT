import { Delete } from '@app/core/models/delete.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { MemberResponse, MembersResponse } from './members.interfaces';

export interface memberState {
  responseAll: MembersResponse;
  response: MemberResponse;
  delete: Delete;
  error: HttpErrorResponse;
}
