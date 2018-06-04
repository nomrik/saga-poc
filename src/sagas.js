/* Importing the sagas from the different part of the app and exporting them as one root saga */

import {all} from 'redux-saga/effects';
import {homeSaga} from './app/home/ducks';
import {aboutSaga} from './app/about/ducks';
import {commonSaga} from './app/common';

export default function *rootSaga() {
    yield all([
        homeSaga(),
        aboutSaga(),
        commonSaga()
    ])
};