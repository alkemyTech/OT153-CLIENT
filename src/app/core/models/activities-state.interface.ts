import { Activities } from './activities.interfaces';
import { Delete } from './delete.interface';
import { HttpErrorResponse } from '@angular/common/http';

export interface activitiesState {
    responseAll : Activities[];
    response : Activities;
    delete : Delete;
    error : HttpErrorResponse;
};