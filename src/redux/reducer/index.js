import {combineReducers} from 'redux';
import shoppingReducers from './shoppingReducers';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  //pass in the reducers
  shoppingReducers,
  userReducer,
});

export default rootReducer;
