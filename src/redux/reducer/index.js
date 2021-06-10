import {combineReducers} from 'redux';
import shoppingReducers from './shoppingReducers';

const rootReducer = combineReducers({
  //pass in the reducers
  shoppingReducers,
});

export default rootReducer;
