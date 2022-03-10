import { createSelector } from '@ngrx/store';
import { userState } from '../../models/user-state.interface';

export interface appState {
    userState: userState
}

const selectFeature = (state: appState) => state.userState;

const selectAllData = (state: userState) => state.responseAll;
const selectData = (state:userState) => state.response;
const error = (state:userState) => state.error;
const deleteData = (state:userState) => state.delete;


const SelectStateAllData = createSelector(
    (state:appState) => state.userState, selectAllData
)
const SelectStateData = createSelector(
    (state:appState) => state.userState,selectData
)

const deleteStateData = createSelector(
    (state:appState) => state.userState,deleteData
)

const errorStateData = createSelector(
    (state:appState) => state.userState,error
)


export { SelectStateAllData, SelectStateData, deleteStateData, errorStateData };
