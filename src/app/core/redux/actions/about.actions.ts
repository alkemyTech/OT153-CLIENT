import { Members } from '@app/core/models/members.interfaces';
import { createAction, props } from '@ngrx/store';

export const getMembers = createAction('[About page] get Members', props<{ members: Members }>());
