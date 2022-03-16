import { createSelector } from '@ngrx/store';
import { OrganizationState } from '@app/core/models/organization-state.interface';

export interface appState {
  organizationState: OrganizationState;
}

const selectOrganization = (state: OrganizationState) => state.response;
const selectOrganizationError = (state: OrganizationState) => state.error;

const SelectStateOrganization = createSelector((state: appState) => state.organizationState, selectOrganization);
const SelectStateOrganizationError = createSelector(
  (state: appState) => state.organizationState,
  selectOrganizationError
);

export { SelectStateOrganization, SelectStateOrganizationError };
