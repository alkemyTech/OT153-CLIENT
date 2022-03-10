import { Delete } from '@app/core/models/delete.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Member, MemberResponse, MembersResponse } from './members.interfaces';

export interface memberState {
  responseAll: Member[];
  response: Member;
  delete: Delete;
  error: HttpErrorResponse;
}
