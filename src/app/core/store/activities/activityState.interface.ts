import { Activities } from '../../models/activities.interfaces';
import { Delete } from '../../models/delete.interface';
import { HttpErrorResponse } from '@angular/common/http';

export interface activitiesState {
    responseAll : Activities[];
    response : Activities;
    delete : Delete;
    error : HttpErrorResponse;
};