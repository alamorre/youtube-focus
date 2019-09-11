import {combineReducers} from 'redux';

import focus from './focus';
import route from './route';

export default combineReducers({
  focus: focus,
  route: route
});
