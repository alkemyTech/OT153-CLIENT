import { createSelector } from '@ngrx/store';
import { AboutMembersState, AboutOrganizationState } from '@app/core/models/about-state.interface';

export interface appState {
  aboutMembersState: AboutMembersState;
  // aboutOrganizationState: AboutOrganizationState;
}

const selectAllMembers = (state: AboutMembersState) => state.response;
// const selectOrganization = (state: AboutOrganizationState) => state.response;

const SelectStateAllMembers = createSelector((state: appState) => state.aboutMembersState, selectAllMembers);
// const SelectStateOrganization = createSelector((state: appState) => state.aboutOrganizationState, selectOrganization);

export { SelectStateAllMembers /* , SelectStateOrganization */ };
