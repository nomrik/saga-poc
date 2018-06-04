/* Defines and exports all the different action types for home. Value for each action is its path
in the app, for stack tracing purposes */

export const REQUEST_ANIMALS = 'home/request_animals';
export const STOP_REQUEST_ANIMALS = 'home/stop_request_animals';
export const LOAD_ANIMALS = 'home/load_animals';

export const START_POLLING = 'home/start_polling';
export const STOP_POLLING = 'home/stop_polling';

export default {
    REQUEST_ANIMALS,
    LOAD_ANIMALS,
    START_POLLING,
    STOP_POLLING,
    STOP_REQUEST_ANIMALS
};