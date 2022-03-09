import { memberState } from '@app/core/models/member-state.interface';
import { createSelector } from '@ngrx/store';

export interface appState {
    memberState: memberState
}

const selectFeature = (state: appState) => state.memberState;

const selectAllData = (state: memberState) => state.responseAll;
const selectData = (state:memberState) => state.response;
const error = (state:memberState) => state.error;
const deleteData = (state:memberState) => state.delete;


const SelectStateAllData = createSelector(
    (state:appState) => state.memberState, selectAllData
)
const SelectStateData = createSelector(
    (state:appState) => state.memberState,selectData
)

const deleteStateData = createSelector(
    (state:appState) => state.memberState,deleteData
)

const errorStateData = createSelector(
    (state:appState) => state.memberState,error
)


export { SelectStateAllData, SelectStateData, deleteStateData, errorStateData };
