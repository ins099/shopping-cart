import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  LOAD_CURRENT_ITEM,
  ADJUST_QTY,
  SET_USER,
  GET_USER,
} from '../actionTypes/index';

export const addToCart = item => {
  return {
    type: {ADD_TO_CART},
    payload: {
      id: item.id,
    },
  };
};

export const adjQty = (item, qty) => {
  return {
    type: {ADJUST_QTY},
    payload: {
      id: item.id,
      quantity: qty,
    },
  };
};

export const RemToCart = item => {
  return {
    type: {REMOVE_TO_CART},
    payload: {
      id: item.id,
    },
  };
};

export const loadCurrentItem = item => {
  return {
    type: {LOAD_CURRENT_ITEM},
    payload: {
      id: item.id,
    },
  };
};

export const getUser = () => ({
  type: GET_USER,
});
export const setUser = user => ({
  type: SET_USER,
  user,
});
