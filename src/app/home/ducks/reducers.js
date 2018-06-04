/* Reducers for home. Split and then combined and exported as one reducer */

import types from './types';
import {statusOptions} from './constants';
import {combineReducers} from 'redux';

const animalsReducer = (state = [], action) => {
    switch (action.type) {
        case (types.LOAD_ANIMALS):
            return action.animals;
        default:
            return state;
    }
}

const statusReducer = (state = '', action) => {
    switch (action.type) {
        case types.START_POLLING:
            return statusOptions.updating;
        case types.STOP_POLLING:
            return statusOptions.notUpdating;
        default:
            return state;
    }
}

const homeReducer = combineReducers({
    animals: animalsReducer,
    status: statusReducer
})

export default homeReducer;