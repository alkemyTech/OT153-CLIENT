import { Delete } from '@app/core/models/delete.interface';
import { User, Users, UserData } from '@app/core/models/users.interfaces';
import { HttpErrorResponse } from '@angular/common/http';

export interface userState {
  responseAll: Users;
  response: User;
  delete: Delete;
  error: HttpErrorResponse;
}
