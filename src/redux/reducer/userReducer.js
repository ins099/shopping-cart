import {SET_USER} from '../actionTypes/index';

const initialState = {user: undefined};

const shoppingReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const {user} = action;
      return {...state, user};
    default:
      return state;
  }
};

export default shoppingReducers;
