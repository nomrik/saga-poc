import types from './types';
import {combineReducers} from 'redux';

const animalsReducer = (state = [], action) => {
    switch (action.type) {
        case (types.LOAD_ANIMALS):
            return action.animals;
        default:
            return state;
    }
}

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return state + 1;
        case types.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const homeReducer = combineReducers({
    count: countReducer,
    animals: animalsReducer
})

export default homeReducer;