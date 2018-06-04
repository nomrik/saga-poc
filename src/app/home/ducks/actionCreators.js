/* Actions creators for home. Every action should be created with one of these functions
when dispatched, and not use the type directly with an object literal */

import types from './types';

export const requestAnimals = () => ({
    type: types.REQUEST_ANIMALS
});

export const stopRequestAnimals = () => ({
    type: types.STOP_REQUEST_ANIMALS
});

export const loadAnimals = ({animals}) => ({
    type: types.LOAD_ANIMALS,
    animals
});

export const startPolling = () => ({
    type: types.START_POLLING
});

export const stopPolling = () => ({
    type: types.STOP_POLLING
});

export default {
    requestAnimals,
    loadAnimals,
    startPolling,
    stopPolling,
    stopRequestAnimals
};