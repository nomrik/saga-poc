import types from './types';

const INITIAL_STATE = {
    count: 0
};

const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.INCREMENT_TYPE:
            return {
                ...state, 
                count: state.count + 1
            }
        case types.DECREMENT_TYPE:
        return {
            ...state, 
            count: state.count - 1
        }
        default:
            return state;
    }
};

export default homeReducer;