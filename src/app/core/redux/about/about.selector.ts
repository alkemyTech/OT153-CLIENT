import { createSelector } from '@ngrx/store';
import { AboutMembersState } from '@app/core/models/about-state.interface';

export interface appState {
  aboutMembersState: AboutMembersState;
}

const selectAllMembers = (state: AboutMembersState) => state.success;
const selectAllMembersError = (state: AboutMembersState) => state.error;

const SelectStateAllMembers = createSelector((state: appState) => state.aboutMembersState, selectAllMembers);
const SelectStateAllMembersError = createSelector((state: appState) => state.aboutMembersState, selectAllMembersError);

export { SelectStateAllMembers, SelectStateAllMembersError  };





/* , SelectStateOrganization */
// aboutOrganizationState: AboutOrganizationState;
// const selectOrganization = (state: AboutOrganizationState) => state.response;
// const SelectStateOrganization = createSelector((state: appState) => state.aboutOrganizationState, selectOrganization);