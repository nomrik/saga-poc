import types from './types';

const incrementCount = () => ({
    type: types.INCREMENT_TYPE
});

const decrementCount = () => ({
    type: types.DECREMENT_TYPE
});

export default {
    incrementCount,
    decrementCount
};