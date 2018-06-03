import {delay} from 'redux-saga';
import {put, takeEvery, all} from 'redux-saga/effects';
import {homeTypes, homeActionCreators} from './app/home/ducks';

export function* fetchAnimals() {
    try {
        const response = yield fetch('http://shibe.online/api/shibes?count=10');
        const animals = yield response.json();
        yield put (homeActionCreators.loadAnimals({animals}));
    } catch (e) {
        console.log(e)
    }
}

export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: homeTypes.INCREMENT})
};  

export function* watchIncrementAsync() {
    yield takeEvery(homeTypes.INCREMENT_ASYNC, incrementAsync)
};

export function* watchFetchAnimals() {
    yield takeEvery(homeTypes.REQUEST_ANIMALS, fetchAnimals);
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        watchFetchAnimals(),
    ])
};