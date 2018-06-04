/* Entry point for home, used just for exporting purposes. Exports the reducer as the default
export, and all of the other modules as named exports */

import homeReducer from './reducers';

export {default as homeActionCreators} from './actionCreators';
export {default as homeTypes} from './types';
export {default as homeSelectors} from './selectors';
export {default as homeSaga} from './sagas';
export {default as homeConstants} from './constants';

export default homeReducer;