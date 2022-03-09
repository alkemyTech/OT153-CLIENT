import { createSelector } from '@ngrx/store';
import { AboutMembersState, AboutOrganizationState } from '@app/core/models/about-state.interface';

export interface appState {
  aboutMembersState: AboutMembersState;
}

const selectAllMembers = (state: AboutMembersState) => state.membersResponse;

const SelectStateAllMembers = createSelector((state: appState) => state.aboutMembersState, selectAllMembers);

export { SelectStateAllMembers /* , SelectStateOrganization */ };


// aboutOrganizationState: AboutOrganizationState;
// const selectOrganization = (state: AboutOrganizationState) => state.response;
// const SelectStateOrganization = createSelector((state: appState) => state.aboutOrganizationState, selectOrganization);