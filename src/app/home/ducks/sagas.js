/* Sagas for home, handling all of the async (API) mechanics and logic, including Real Time Updates.
The sagas are then combined and exported as a default export */

import {delay} from 'redux-saga';
import {put, take, all, call, fork, cancel, cancelled} from 'redux-saga/effects';
import types from './types';
import actionCreators from './actionCreators';

export function *animalPolling() {
    try {
        while (true) {
            yield put(actionCreators.requestAnimals());
            const response = yield call(fetch, 'http://shibe.online/api/shibes?count=12');
            const animals = yield response.json();
            yield put (actionCreators.loadAnimals({animals}));
            yield call(delay, 5000);
        }
    } catch (e) {
        console.log(e);
    } finally {
        if (yield cancelled()) {
            yield put (actionCreators.stopRequestAnimals());
        }
    }
}

export function *manageAnimalPolling() {
    // when START_POLLING is dispatched
    while ( yield take(types.START_POLLING) ) {

        // start animalPolling in the background
        const animallPollingTask = yield fork (animalPolling);

        // wait until STOP_POLLING is dispatched
        yield take(types.STOP_POLLING);
        // cancel animalPolling
        yield cancel(animallPollingTask)
    }
}

export default function *homeSaga() {
    yield all([
        manageAnimalPolling()
    ])
}