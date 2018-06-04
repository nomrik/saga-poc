/* Importing all the different reducers and creating the root reducer */

import {combineReducers} from 'redux';

import homeReducer from './app/home/ducks';
import aboutReducer from './app/about/ducks';

const rootReducer = combineReducers({
    home: homeReducer,
    about: aboutReducer
});

export default rootReducer;