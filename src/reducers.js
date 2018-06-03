import {combineReducers} from 'redux';

import home from './app/home/ducks';
import about from './app/about/ducks';

const rootReducer = combineReducers({
    home,
    about
});

export default rootReducer;