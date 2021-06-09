import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  LOAD_CURRENT_ITEM,
  ADJUST_QTY,
} from '../actionTypes/index';

const initialState = {
  products: [], //{id, name, desc, price} ,
  cart: [], //{id, name, desc, price, qty}
  currentItem: null,
};

const shoppingReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //get the items data from the products array
      const item = state.products.find((prod) => prod.id === action.payload.id)
      //check if item is in cart already
      const inCart = state.cart.find((prod) => prod.id ===action.payload.id ? true:false )

      return {
        ...state,
        inCart ? state.cart.map
      }

    case REMOVE_TO_CART:
    case ADJUST_QTY:
    case LOAD_CURRENT_ITEM:
  }
};

export default shoppingReducers;
