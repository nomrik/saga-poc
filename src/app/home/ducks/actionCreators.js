import types from './types';

const incrementCount = () => ({
    type: types.INCREMENT
});

const incrementCountAsync = () => ({
    type: types.INCREMENT_ASYNC
});

const decrementCount = () => ({
    type: types.DECREMENT
});

const requestAnimals = () => ({
    type: types.REQUEST_ANIMALS
});

const loadAnimals = ({animals}) => ({
    type: types.LOAD_ANIMALS,
    animals
});

export default {
    incrementCount,
    decrementCount,
    incrementCountAsync,
    requestAnimals,
    loadAnimals
};